import { AxisBottom, AxisLeft } from "@visx/axis";
import { Group } from "@visx/group";
import { LegendOrdinal } from "@visx/legend";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { BarStackHorizontal } from "@visx/shape";
import { SeriesPoint } from "@visx/shape/lib/types";
import { defaultStyles, Tooltip, withTooltip } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import {
  UXEventTypeKeys,
  UXEventType,
  PastUXEvent,
} from "../../analytics/UXEventInterfaces";

interface HorizontalEventTimelineProps {
  pastUXEvents: PastUXEvent[];
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
  bar: SeriesPoint<PastUXEvent>;
  key: UXEventType;
  index: number;
  height: number;
  width: number;
  x: number;
  y: number;
  color: string;
}

export const DEFAULT_STYLING: HorizontalEventTimelineStyling = {
  width: 500,
  height: 500,
  backgroundColor: "#eaedff",
  borderRadius: 16,
  axisColor: "black",
  margin: {
    top: 40,
    right: 40,
    bottom: 100,
    left: 50,
  },
};

const formatSessionID = (pastUXEvent: PastUXEvent) => {
  return pastUXEvent.sessionID.slice(0, 3);
};

function createRelativeScalesFromEventSeries(eventSeries: PastUXEvent[]) {
  const relativeTimeMax = 5000;
  const timeScale = scaleLinear<number>({
    domain: [0, relativeTimeMax],
    nice: true,
  });
  const sIDScale = scaleBand<string>({
    domain: eventSeries.map(formatSessionID),
    padding: 0.2,
  });
  return {
    timeScale,
    sIDScale,
  };
}
const colorScale = scaleOrdinal<UXEventType, string>({
  domain: UXEventTypeKeys,
  range: ["#6c5efb", "#c998ff"],
});

let tooltipTimeout: number;

export const HorizontalEventTimeline = withTooltip<
  HorizontalEventTimelineProps,
  TooltipData
>(
  ({
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

    const data = pastUXEvents;

    const scales = createRelativeScalesFromEventSeries(data);

    scales.timeScale.rangeRound([0, xMax]);
    scales.sIDScale.rangeRound([yMax, 0]);
    return (
      <div>
        <svg width={_styling.width} height={_styling.height}>
          <rect
            width={_styling.width}
            height={_styling.height}
            fill={_styling.backgroundColor}
            rx={14}
          />
          <Group top={_styling.margin.top} left={_styling.margin.left}>
            <BarStackHorizontal<PastUXEvent, UXEventType>
              data={data}
              keys={UXEventTypeKeys}
              height={yMax}
              y={formatSessionID}
              xScale={scales.timeScale}
              yScale={scales.sIDScale}
              color={colorScale}
            >
              {(barStacks) =>
                barStacks.map((barStack) =>
                  barStack.bars.map((bar) => (
                    <rect
                      key={`barstack-horizontal-${barStack.index}-${bar.index}`}
                      x={bar.x}
                      y={bar.y}
                      width={bar.width}
                      height={bar.height}
                      fill={bar.color}
                      onMouseLeave={() => {
                        tooltipTimeout = window.setTimeout(() => {
                          hideTooltip();
                        }, 300);
                      }}
                      onMouseMove={() => {
                        if (tooltipTimeout) clearTimeout(tooltipTimeout);
                        const top = bar.y + _styling.margin.top;
                        const left = bar.x + bar.width + _styling.margin.left;
                        showTooltip({
                          tooltipData: bar,
                          tooltipTop: top,
                          tooltipLeft: left,
                        });
                      }}
                    />
                  ))
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
              scale={scales.timeScale}
              stroke={_styling.axisColor}
              tickStroke={_styling.axisColor}
              tickLabelProps={() => ({
                fill: _styling.axisColor,
                fontSize: 11,
                textAnchor: "middle",
              })}
            />
          </Group>
        </svg>
        <div
          style={{
            position: "absolute",
            top: _styling.margin.top / 2 - 10,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            fontSize: "14px",
          }}
        >
          <LegendOrdinal
            scale={colorScale}
            direction="row"
            labelMargin="0 15px 0 0"
          />
        </div>
        {tooltipOpen && tooltipData && (
          <Tooltip top={tooltipTop} left={tooltipLeft} style={defaultStyles}>
            <div style={{ color: colorScale(tooltipData.key) }}>
              <strong>{tooltipData.key}</strong>
            </div>
            {/*
            <div>{tooltipData.bar.data[tooltipData.key]}℉</div>
            <div>
              <small>{formatDate(getDate(tooltipData.bar.data))}</small>
            </div>
            */}
          </Tooltip>
        )}
      </div>
    );
  }
);
