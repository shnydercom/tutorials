import { useEffect, useState } from "react";
import { getAllUXEvents } from "../analytics/UXEventAnalysisAPI";
import { PastUXEvent } from "../analytics/UXEventInterfaces";
import { UXEventSequenceVisualizer } from "../components/ux-data-visualization/UXEventSequenceVisualizer";

export const AnalyticsPage = () => {
  const [pastUXEvents, setPastUXEvents] = useState<PastUXEvent[]>([]);

  useEffect(() => {
    let mounted = true;
    getAllUXEvents().then((items) => {
      if (mounted) {
        setPastUXEvents(items);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div className="analytics">
      <div className="how-to">
        <h2>Comparing events across different sessions</h2>
        <ul>
          <li>
            When we have a low number of users, we can't take averages. Individual events can be more useful then
          </li>
          <li>
            Event timing can depend on the user's behaviour, the screen size or device that they're using, distractions etc.
          </li>
          <li>
            The events on the user page are logged to a database, hover over an event to get more details
          </li>
        </ul>
      </div>
      <UXEventSequenceVisualizer pastUXEvents={pastUXEvents} />
    </div>
  );
};
