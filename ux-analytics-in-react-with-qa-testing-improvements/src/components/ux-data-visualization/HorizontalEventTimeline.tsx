import { AxisBottom, AxisLeft } from "@visx/axis";
import { Group } from "@visx/group";
import { LegendOrdinal } from "@visx/legend";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { BarStackHorizontal } from "@visx/shape";
import { SeriesPoint } from "@visx/shape/lib/types";
import { defaultStyles, Tooltip, withTooltip } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import { ScaleLinear, ScaleBand } from "d3-scale";
import { useEffect, useState } from "react";
import {
  PastUXEvent,
  UXEventType,
  UXEventTypeKeys,
} from "../../analytics/UXEventInterfaces";

type ChartKey = "relativeTime" | "indexInDataSet";

interface HorizontalEventTimelineProps {
  pastUXEvents: PastUXEvent[];
  chartKey?: ChartKey;
  styling?: HorizontalEventTimelineStyling;
}

interface HorizontalEventTimelineStyling {
  width: number;
  height: number;
  backgroundColor: string;
  borderRadius: number;
  axisColor: string;
  margin: { top: number; right: number; bottom: number; left: number };
}

interface TooltipData {
  bar: SeriesPoint<PastUXEventKeyed>;
  key: UXEventType;
  index: number;
  height: number;
  width: number;
  x: number;
  y: number;
  color: string;
}

interface PastUXEventKeyed extends Record<UXEventType, number>, PastUXEvent {
  indexInDataSet: number;
}

interface ChartScales {
  timeScale: ScaleLinear<number, number, never>;
  interactionsScale: ScaleLinear<number, number, never>;
  sIDScale: ScaleBand<string>;
  relativeTimeMax: number;
}

export const DEFAULT_STYLING: HorizontalEventTimelineStyling = {
  width: 500,
  height: 500,
  backgroundColor: "#fff",
  borderRadius: 16,
  axisColor: "black",
  margin: {
    top: 40,
    right: 40,
    bottom: 100,
    left: 50,
  },
};

const SCALE_BASE = 1 / 1000;

const formatDate = (date: Date) => {
  return date.toISOString();
};
const formatSessionID = (pastUXEvent: PastUXEvent) => {
  return pastUXEvent.sessionID.slice(0, 3);
};

function modifySeriesBy(
  chartKey: ChartKey,
  eventSeries: PastUXEvent[],
  timeOffset: number,
  timeScaleFactor: number,
  explicitEventTypes: UXEventType[]
) {
  //modify interaction scale
  eventSeries.reduce<{ [s: string]: number }>(
    (prev, cur) => {
      if (prev.hasOwnProperty(cur.sessionID)) {
        prev[cur.sessionID]++;
      } else {
        prev[cur.sessionID] = 1;
      }
      (cur as PastUXEventKeyed).indexInDataSet = prev[cur.sessionID];
      return prev;
    },
    {}
  );
  //modify time scale
  eventSeries.forEach((pUXe) => {
    explicitEventTypes.forEach((evType) => {
      if (pUXe.eventType === evType) {
        if (chartKey === "relativeTime") {
          (pUXe as PastUXEventKeyed)[evType] =
            (pUXe.relativeTime + timeOffset) * timeScaleFactor;
        }
        if (chartKey === "indexInDataSet") {
          (pUXe as PastUXEventKeyed)[evType] = (
            pUXe as PastUXEventKeyed
          ).indexInDataSet;
        }
      }
    });
  });
}

function createRelativeScalesFromEventSeries(
  eventSeries: PastUXEvent[]
): ChartScales {
  const relativeTimeMax = Math.max(
    ...eventSeries.map((pUXe) => pUXe.relativeTime)
  );
  const interactionsDict = eventSeries.reduce<{ [s: string]: number }>(
    (prev, cur) => {
      if (prev.hasOwnProperty(cur.sessionID)) {
        prev[cur.sessionID]++;
      } else {
        prev[cur.sessionID] = 1;
      }
      return prev;
    },
    {}
  );
  const interactionsMax = Math.max(...Object.values(interactionsDict));
  console.log(interactionsDict)
  const timeScale = scaleLinear<number>({
    domain: [0, relativeTimeMax * SCALE_BASE],
    nice: true,
  });
  const interactionsScale = scaleLinear<number>({
    domain: [0, interactionsMax],
    nice: true,
  });
  const sIDScale = scaleBand<string>({
    domain: eventSeries.map(formatSessionID),
    padding: 0.2,
  });
  return {
    interactionsScale,
    timeScale,
    sIDScale,
    relativeTimeMax,
  };
}

const eventTypeColors = [
  "rgb(4 58 123)",
  "rgb(228 2 2)",
  "rgb(180 230 237)",
  "rgb(251 204 14)",
];

const colorScale = scaleOrdinal<UXEventType, string>({
  domain: UXEventTypeKeys,
  range: eventTypeColors,
});

function createLinearGradients(color: string, colorName: UXEventType) {
  return (
    <linearGradient id={colorName} key={colorName}>
      <stop offset="0%" stopColor={color} stopOpacity="30%" />
      <stop offset="100%" stopColor={color} stopOpacity="1%" />
      <stop offset="100%" stopColor={color} style={{ stopOpacity: 0 }} />
    </linearGradient>
  );
}

let tooltipTimeout: number;

export const HorizontalEventTimeline = withTooltip<
  HorizontalEventTimelineProps,
  TooltipData
>(
  ({
    chartKey = "relativeTime",
    styling,
    pastUXEvents,
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
  }: HorizontalEventTimelineProps & WithTooltipProvidedProps<TooltipData>) => {
    const _styling = styling ? styling : DEFAULT_STYLING;
    const xMax = _styling.width - _styling.margin.left - _styling.margin.right;
    const yMax = _styling.height - _styling.margin.top - _styling.margin.bottom;
    const eventWidth = xMax / 100;

    const [data, setPastUXEventsKeyed] = useState<PastUXEventKeyed[]>([]);
    const [scales, setScales] = useState<ChartScales | undefined>(undefined);
    useEffect(() => {
      // create a deep copy of the data to relativize the timeStamps
      const pastUXEventsKeyed = JSON.parse(JSON.stringify(pastUXEvents));
      const _scales = createRelativeScalesFromEventSeries(pastUXEventsKeyed);
      modifySeriesBy(
        chartKey,
        pastUXEventsKeyed,
        0,
        SCALE_BASE,
        UXEventTypeKeys
      );
      _scales.interactionsScale.rangeRound([0, xMax]);
      _scales.timeScale.rangeRound([0, xMax]);
      _scales.sIDScale.rangeRound([yMax, 0]);
      setScales(_scales);
      setPastUXEventsKeyed(pastUXEventsKeyed);
    }, [pastUXEvents, chartKey]);

    return (
      <div style={{ position: "relative", width: _styling.width }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={_styling.width}
          height={_styling.height}
        >
          <defs>
            {eventTypeColors.map((color, idx) =>
              createLinearGradients(color, UXEventTypeKeys[idx])
            )}
          </defs>
          <rect
            width={_styling.width}
            height={_styling.height}
            fill={_styling.backgroundColor}
            rx={14}
          />
          {scales && (
            <Group top={_styling.margin.top + 16} left={_styling.margin.left}>
              <BarStackHorizontal<PastUXEventKeyed, UXEventType>
                data={data}
                keys={UXEventTypeKeys}
                height={yMax}
                y={formatSessionID}
                x={chartKey}
                xScale={
                  chartKey === "relativeTime"
                    ? scales.timeScale
                    : scales.interactionsScale
                }
                yScale={scales.sIDScale}
                color={colorScale}
              >
                {(barStacks) =>
                  barStacks.map((barStack) =>
                    barStack.bars.map((bar) => {
                      const elEvType = data[bar.index].eventType;
                      if (elEvType !== bar.key) return null;
                      return (
                        <rect
                          key={`barstack-horizontal-${barStack.index}-${bar.index}`}
                          x={bar.width}
                          y={bar.y}
                          width={eventWidth}
                          height={bar.height}
                          fill={`url('#${elEvType}')` /*bar.color*/}
                          onMouseLeave={() => {
                            tooltipTimeout = window.setTimeout(() => {
                              hideTooltip();
                            }, 300);
                          }}
                          onMouseMove={() => {
                            if (tooltipTimeout) clearTimeout(tooltipTimeout);
                            const top = bar.y + _styling.margin.top;
                            const left =
                              bar.x +
                              bar.width +
                              _styling.margin.left +
                              eventWidth;
                            showTooltip({
                              tooltipData: bar,
                              tooltipTop: top,
                              tooltipLeft: left,
                            });
                          }}
                        />
                      );
                    })
                  )
                }
              </BarStackHorizontal>
              <AxisLeft
                hideAxisLine
                hideTicks
                scale={scales.sIDScale}
                stroke={_styling.axisColor}
                tickStroke={_styling.axisColor}
                tickLabelProps={() => ({
                  fill: _styling.axisColor,
                  fontSize: 11,
                  textAnchor: "end",
                  dy: "0.33em",
                })}
              />
              <AxisBottom
                top={yMax}
                scale={
                  chartKey === "relativeTime"
                    ? scales.timeScale
                    : scales.interactionsScale
                }
                stroke={_styling.axisColor}
                tickStroke={_styling.axisColor}
                tickLabelProps={() => ({
                  fill: _styling.axisColor,
                  fontSize: 11,
                  textAnchor: "middle",
                })}
              />
            </Group>
          )}
        </svg>
        <LegendOrdinal
          style={{
            position: "absolute",
            top: _styling.margin.top / 2 + 10,
            width: _styling.width,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            fontSize: "14px",
          }}
          scale={colorScale}
          direction="row"
          labelMargin="0 15px 0 0"
        />
        <div
          style={{
            position: "absolute",
            bottom: _styling.margin.top / 2 + 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            fontSize: "14px",
          }}
        >
          <strong>{"Session Time"}</strong>
        </div>
        {tooltipOpen && tooltipData && (
          <Tooltip top={tooltipTop} left={tooltipLeft} style={defaultStyles}>
            <div style={{ color: colorScale(tooltipData.key) }}>
              <strong>Event Type: {tooltipData.key}</strong>
            </div>
            <div>Element ID: {tooltipData.bar.data.sourceID}</div>
            {tooltipData.bar.data.eventValue && (
              <div>Event Value: {tooltipData.bar.data.eventValue}</div>
            )}
            <div>Session ID: {tooltipData.bar.data.sessionID}</div>
            <div>
              <small>
                Time after 1st event:{" "}
                {(tooltipData.bar.data.relativeTime * SCALE_BASE).toFixed(3)}s
              </small>
            </div>
            <div>
              <small>
                Date and Time of event:{" "}
                {formatDate(new Date(tooltipData.bar.data.timeStamp))}
              </small>
            </div>
            <div>
              <small>
                Index in session: {tooltipData.bar.data.indexInDataSet}
              </small>
            </div>
          </Tooltip>
        )}
      </div>
    );
  },
  { style: { display: "flex", justifyContent: "center" } }
);
