import React from "react";
import { GetJediHeroQuery, useGetJediHeroQuery } from "../generated/graphql";
import { JSONViewer } from "./json-viewer/JSONViewer";
import { AvailableTableLayouts } from "./table/helpers/interfaces";
import { flattenRelayEdge } from "./table/functionality/flattenRelayEdge";
import { rawTableDataElemToColumn } from "./table/functionality/rawTableDataElemToColumn";
import { BatteriesIncludedTable } from "./table/helpers/BatteriesIncludedTable";
import { DefaultAllContainerCompsDict } from "./table/flavour";

export const VisualContent = () => {
  const jediHeroResult = useGetJediHeroQuery();

  // preparing the TableViewerOptions
  const jediTableOptionsMemo = React.useMemo(
    () => ({
      rowArrayAccessor: (query: GetJediHeroQuery) =>
        query?.hero?.friendsConnection?.edges ?? [],
      rawDataToSourceTransformator: flattenRelayEdge,
      containerCompDict: DefaultAllContainerCompsDict,
      layout: "sorting" as AvailableTableLayouts,
      sourceDataToColumnsMapper: rawTableDataElemToColumn,
    }),
    []
  );
  // some basic error handling
  if (jediHeroResult.error) {
    return <div>{jediHeroResult.error.message}</div>;
  }
  if (!jediHeroResult.data) {
    return <div>{`no data to display`}</div>;
  }
  if (
    (jediHeroResult.data?.hero?.friendsConnection?.edges?.length ?? -1) <= 0
  ) {
    return <div>{`not the right data to display`}</div>;
  }
  // finally, displaying the data
  return (
    <div>
      <JSONViewer objectToDisplay={jediHeroResult.data} />
      <BatteriesIncludedTable
        rawData={jediHeroResult.data}
        options={jediTableOptionsMemo}
      />
    </div>
  );
};
