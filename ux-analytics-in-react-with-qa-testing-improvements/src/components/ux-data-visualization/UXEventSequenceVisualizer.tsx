import { PastUXEvent } from "../../analytics/UXEventInterfaces";
import HorizontalEventTimeline from "./Example";

export interface UXEventSequenceVisualizerProps {
  pastUXEvents: PastUXEvent[];
}

export const UXEventSequenceVisualizer = (
  props: UXEventSequenceVisualizerProps
) => {
    
  return <HorizontalEventTimeline height={500} width={500} />;
};
