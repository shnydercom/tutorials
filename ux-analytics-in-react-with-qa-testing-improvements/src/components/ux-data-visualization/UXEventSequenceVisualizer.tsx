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
            Opening the user's page in a different browser or re-opening in
            private mode will create a new session
          </li>
        </ul>
      </div>
      <HorizontalEventTimeline
        pastUXEvents={props.pastUXEvents}
        chartKey={"indexInDataSet"}
      />
      <div className="how-to">
        <strong>This chart shows the same UX-events, but in sequence</strong>
        <ul>
          <li>
            It can be more interesting to know in which order events are
            triggered.
          </li>
          <li>Sessions can include long times when the user stays idle</li>
          <li>
            over-firing of events can be analyzed. E.g. the{" "}
            <i>is_visible_changed_to</i> event fires for each HR-element when it is
            removed from the DOM
          </li>
        </ul>
      </div>
    </>
  );
};
