import React from "react";
import { GetJediHeroQuery, useGetJediHeroQuery } from "../generated/graphql";
import { JSONViewer } from "./json-viewer/JSONViewer";
import { defaultTablePartFactories } from "./table/flavour/default/DefaultTablePartFactories";
import { flattenRelayEdge } from "./table/functionality/flattenRelayEdge";
import { TableViewer } from "./table/TableViewer";

export const VisualContent = () => {
  const jediHeroResult = useGetJediHeroQuery();
  // preparing the TableViewerOptions
  const jediTableOptionsMemo = React.useMemo(
    () => ({
      rowArrayAccessor: (query: GetJediHeroQuery) =>
        query?.hero?.friendsConnection?.edges ?? [],
      rowTransformation: flattenRelayEdge,
      tablePartFactories: defaultTablePartFactories,
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
      <TableViewer
        queryData={jediHeroResult.data}
        options={jediTableOptionsMemo}
      />
    </div>
  );
};
