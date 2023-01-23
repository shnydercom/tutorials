import React, { useState } from "react";
import {
  Episode,
  StarwarsSearchQuery,
  useStarwarsSearchQuery,
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

export const VisualContent = () => {
  const [tableControlOptions, setTableControlOptions] =
    useState<TableControlOptionsAsJSON>({
      flavour: "default",
      layout: "simple",
      episodeToQuery: Episode.Newhope,
      searchValue: "",
    });

  const searchResult = useStarwarsSearchQuery({
    variables: { searchValue: tableControlOptions.searchValue }
  });
  console.log(searchResult)
  // preparing the TableViewerOptions
  const searchTableOptionsMemo = React.useMemo(() => {
    const defaultOptions = createDefaultRelaySpecExplorationTableOptions();
    return {
      ...defaultOptions,
      rowArrayAccessor: (query: StarwarsSearchQuery) => query?.search ?? [],
    };
  }, [tableControlOptions]);
  // some basic error handling
  if (searchResult.error) {
    return <div>{searchResult.error.message}</div>;
  }
  if (!searchResult.data && !searchResult.loading) {
    return (
      <div>{`no data to display, have you started the graphql server?`}</div>
    );
  }
  // finally, displaying the data
  return (
    <div className="visual-content">
      <VisualControlsForTableOptions
        controlOptions={tableControlOptions}
        handleChange={setTableControlOptions}
      />
      <Card>
        {(searchResult.data?.search?.length ?? -1) <= 0 ? (
          <div>{`not the right data to display`}</div>
        ) : (
          <FlavourContextProvider flavourName={tableControlOptions.flavour}>
            <TableLayoutContextProvider
              tableLayoutName={tableControlOptions.layout}
            >
              {searchResult.loading && <div>{`...loading...`}</div>}
              {searchResult.data && (
                <RelaySpecExplorationTable
                  rawData={searchResult.data}
                  options={searchTableOptionsMemo}
                />
              )}
            </TableLayoutContextProvider>
          </FlavourContextProvider>
        )}
      </Card>
      <Card>
        <h3>This is the data that we retrieved:</h3>
        <JSONViewer objectToDisplay={searchResult.data} />
      </Card>
    </div>
  );
};
