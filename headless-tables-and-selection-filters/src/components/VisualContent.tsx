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
  DefaultComponentCreatorFnsDict,
  MuiComponentCreatorFnsDictionary,
  XRComponentCreatorFnsDict,
} from "./table/flavour";
import {
  TableControlOptionsAsJSON,
  VisualControlsForTableOptions,
} from "./VisualControlsForTableOptions";

export const VisualContent = () => {
  const [tableControlOptions, setTableControlOptions] =
    useState<TableControlOptionsAsJSON>({
      flavour: "defaulthtml",
      layout: "simple",
      episodeToQuery: Episode.Newhope,
    });

  const jediHeroResult = useGetJediHeroByEpisodeQuery({
    variables: { episode: tableControlOptions.episodeToQuery },
  });

  // preparing the TableViewerOptions
  const jediTableOptionsMemo = React.useMemo(() => {
    let compCreatorDict;
    switch (tableControlOptions.flavour) {
      case "defaulthtml":
        compCreatorDict = DefaultComponentCreatorFnsDict;
        break;
      case "mui":
        compCreatorDict = MuiComponentCreatorFnsDictionary;
        break;
      case "xr":
        compCreatorDict = XRComponentCreatorFnsDict;
        break;
      default:
        compCreatorDict = DefaultComponentCreatorFnsDict;
        break;
    }
    return {
      rowArrayAccessor: (query: GetJediHeroByEpisodeQuery) =>
        query?.hero?.friendsConnection?.edges ?? [],
      rawDataToSourceTransformator: flattenRelayEdge,
      compCreatorDict,
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
    <div>
      <VisualControlsForTableOptions
        controlOptions={tableControlOptions}
        handleChange={setTableControlOptions}
      />
      <BatteriesIncludedTable
        rawData={jediHeroResult.data}
        options={jediTableOptionsMemo}
      />
      <div>
        <h3>This is the data that we retrieved:</h3>
        <JSONViewer objectToDisplay={jediHeroResult.data} />
      </div>
    </div>
  );
};
