/*import { AxisBottom, AxisLeft } from "@visx/axis";
import { Group } from "@visx/group";
import { LegendOrdinal } from "@visx/legend";
import { scaleOrdinal } from "@visx/scale";
import { BarStackHorizontal } from "@visx/shape";
import {
  UXEventTypeKeys,
  UXEventType,
} from "../../analytics/UXEventInterfaces";

interface HorizontalEventTimelineProps {
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

export const DEFAULT_STYLING: HorizontalEventTimelineStyling = {
  width: 500,
  height: 500,
  backgroundColor: "#eaedff",
  borderRadius: 16,
  axisColor: "black",
  margin: {
    top: 16,
    right: 16,
    bottom: 16,
    left: 16,
  },
};

const colorScale = scaleOrdinal<UXEventType, string>({
  domain: UXEventTypeKeys,
  range: ["#6c5efb", "#c998ff"],
});

export const HorizontalEventTimeline = (
  props: HorizontalEventTimelineProps
) => {
  const styling = props.styling ? props.styling : DEFAULT_STYLING;
  const xMax = styling.width - styling.margin.left - styling.margin.right;
  const yMax = styling.height - styling.margin.top - styling.margin.bottom;
  return (
    <div>
      <svg width={styling.width} height={styling.height}>
        <rect
          width={styling.width}
          height={styling.height}
          fill={styling.backgroundColor}
          rx={14}
        />
        <Group top={styling.margin.top} left={styling.margin.left}>
          <BarStackHorizontal<CityTemperature, CityName>
            data={data}
            keys={keys}
            height={yMax}
            y={getDate}
            xScale={temperatureScale}
            yScale={dateScale}
            color={colorScale}
          ></BarStackHorizontal>
          <AxisLeft
              hideAxisLine
              hideTicks
              scale={dateScale}
              tickFormat={formatDate}
              stroke={styling.axisColor}
              tickStroke={styling.axisColor}
              tickLabelProps={() => ({
                fill: styling.axisColor,
                fontSize: 11,
                textAnchor: 'end',
                dy: '0.33em',
              })}
            />
            <AxisBottom
              top={yMax}
              scale={temperatureScale}
              stroke={styling.axisColor}
              tickStroke={styling.axisColor}
              tickLabelProps={() => ({
                fill: styling.axisColor,
                fontSize: 11,
                textAnchor: 'middle',
              })}
            />
        </Group>
      </svg>
      <div
          style={{
            position: 'absolute',
            top: styling.margin.top / 2 - 10,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '14px',
          }}
        >
          <LegendOrdinal scale={colorScale} direction="row" labelMargin="0 15px 0 0" />
        </div>
    </div>
  );
};
*/
export const bla = ";";
