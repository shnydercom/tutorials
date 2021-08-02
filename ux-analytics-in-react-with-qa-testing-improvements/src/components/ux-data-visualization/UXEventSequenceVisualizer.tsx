import { PastUXEvent } from "../../analytics/UXEventInterfaces";
import { HorizontalEventTimeline } from "./HorizontalEventTimeline";

export interface UXEventSequenceVisualizerProps {
  pastUXEvents: PastUXEvent[];
}

export const UXEventSequenceVisualizer = (
  props: UXEventSequenceVisualizerProps
) => {
  return (
    <>
      <HorizontalEventTimeline pastUXEvents={props.pastUXEvents} />
      <div className="how-to">
        <strong>This chart shows UX-events in different sessions.</strong>
        <ul>
          <li>
            The first event for each session will be at zero on the x-axis.
          </li>
          <li>
            The x-axis displays how many seconds have passed since the first
            event.
          </li>
          <li>Events are transparent to make overlapping events clearer.</li>
          <li>Details on single events appear when hovering.</li>
          <li>
            The y-axis is labelled with the first 3 characters of the session
            ID.
          </li>
          <li>
            Opening the page in a different browser or re-opening in private
            mode will create a new session
          </li>
        </ul>
      </div>
    </>
  );
};
