import React, { useState } from "react";
import {
  Episode,
  GetJediHeroByEpisodeQuery,
  useGetJediHeroByEpisodeQuery,
} from "../generated/graphql";
import { JSONViewer } from "./json-viewer/JSONViewer";
import {
  TableControlOptionsAsJSON,
  VisualControlsForTableOptions,
} from "./VisualControlsForTableOptions";
import { Card } from "./card/Card";
import { FlavourContextProvider } from "./table/flavour/FlavourContext";
import { TableLayoutContextProvider } from "./table/layout/TableLayoutContext";
import { RelaySpecExplorationTable } from "./subgraph-auto-display/RelaySpecExplorationTable";
import { createDefaultRelaySpecExplorationTableOptions } from "./subgraph-auto-display/accessing-relay-graph-functionality/defaultOptions";
import { flattenRelayEdge } from "./subgraph-auto-display/accessing-relay-graph-functionality/flattenRelayEdge";

export const VisualContent = () => {
  const [tableControlOptions, setTableControlOptions] =
    useState<TableControlOptionsAsJSON>({
      flavour: "default",
      layout: "simple",
      episodeToQuery: Episode.Newhope,
    });

  const jediHeroResult = useGetJediHeroByEpisodeQuery({
    variables: { episode: tableControlOptions.episodeToQuery },
    refetchWritePolicy: "overwrite",
  });

  // preparing the TableViewerOptions
  const jediTableOptionsMemo = React.useMemo(() => {
    const defaultOptions = createDefaultRelaySpecExplorationTableOptions();
    return {
      ...defaultOptions,
      rowArrayAccessor: (query: GetJediHeroByEpisodeQuery) =>
        query?.hero?.friendsConnection?.edges ?? [],
      rawDataToSourceTransformator: flattenRelayEdge,
    };
  }, [tableControlOptions]);
  // some basic error handling
  if (jediHeroResult.error) {
    return <div>{jediHeroResult.error.message}</div>;
  }
  if (!jediHeroResult.data && !jediHeroResult.loading) {
    return (
      <div>{`no data to display, have you started the graphql server?`}</div>
    );
  }
  if (
    (jediHeroResult.data?.hero?.friendsConnection?.edges?.length ?? -1) <= 0
  ) {
    return <div>{`not the right data to display`}</div>;
  }
  // finally, displaying the data
  return (
    <div className="visual-content">
      <VisualControlsForTableOptions
        controlOptions={tableControlOptions}
        handleChange={setTableControlOptions}
      />
      <Card>
        <FlavourContextProvider flavourName={tableControlOptions.flavour}>
          <TableLayoutContextProvider
            tableLayoutName={tableControlOptions.layout}
          >
            {jediHeroResult.loading && <div>{`...loading...`}</div>}
            {jediHeroResult.data && (
              <RelaySpecExplorationTable
                rawData={jediHeroResult.data}
                options={jediTableOptionsMemo}
              />
            )}
          </TableLayoutContextProvider>
        </FlavourContextProvider>
      </Card>
      <Card>
        <h3>This is the data that we retrieved:</h3>
        <JSONViewer objectToDisplay={jediHeroResult.data} />
      </Card>
    </div>
  );
};
