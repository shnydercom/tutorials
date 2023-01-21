import React, { useState } from "react";
import {
  Episode,
  GetJediHeroByEpisodeQuery,
  useGetJediHeroByEpisodeQuery,
} from "../generated/graphql";
import { JSONViewer } from "./json-viewer/JSONViewer";
import { flattenRelayEdge } from "./table/functionality/flattenRelayEdge";
import { rawTableDataElemToColumn } from "./table/functionality/rawTableDataElemToColumn";
import { BatteriesIncludedTable } from "./table/helpers/BatteriesIncludedTable";
import {
  TableControlOptionsAsJSON,
  VisualControlsForTableOptions,
} from "./VisualControlsForTableOptions";
import { Card } from "./card/Card";
import { FlavourContextProvider } from "./table/flavour/FlavourContext";

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
    return {
      rowArrayAccessor: (query: GetJediHeroByEpisodeQuery) =>
        query?.hero?.friendsConnection?.edges ?? [],
      rawDataToSourceTransformator: flattenRelayEdge,
      layout: tableControlOptions.layout,
      sourceDataToColumnsMapper: rawTableDataElemToColumn,
    };
  }, [tableControlOptions]);
  // some basic error handling
  if (jediHeroResult.error) {
    return <div>{jediHeroResult.error.message}</div>;
  }
  if (!jediHeroResult.data) {
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
        <FlavourContextProvider flavourName={tableControlOptions.flavour} >
          <BatteriesIncludedTable
            rawData={jediHeroResult.data}
            options={jediTableOptionsMemo}
          />
        </FlavourContextProvider>
      </Card>
      <Card>
        <h3>This is the data that we retrieved:</h3>
        <JSONViewer objectToDisplay={jediHeroResult.data} />
      </Card>
    </div>
  );
};
