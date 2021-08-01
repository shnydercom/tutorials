import { useEffect, useState } from "react";
import { getAllUXEvents } from "../analytics/UXEventAnalysisAPI";
import { PastUXEvent } from "../analytics/UXEventInterfaces";
import { UXEventSequenceVisualizer } from "../components/ux-data-visualization/UXEventSequenceVisualizer";

export const DataNerdPage = () => {
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
    <div className="data-nerd">
      <UXEventSequenceVisualizer pastUXEvents={pastUXEvents} />
    </div>
  );
};
