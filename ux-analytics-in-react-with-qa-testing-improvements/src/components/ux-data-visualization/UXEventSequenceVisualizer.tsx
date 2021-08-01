import { PastUXEvent } from "../../analytics/UXEventInterfaces";
import { HorizontalEventTimeline } from "./HorizontalEventTimeline";

export interface UXEventSequenceVisualizerProps {
  pastUXEvents: PastUXEvent[];
}

export const UXEventSequenceVisualizer = (
  props: UXEventSequenceVisualizerProps
) => {
  return <HorizontalEventTimeline pastUXEvents={props.pastUXEvents} />;
};
