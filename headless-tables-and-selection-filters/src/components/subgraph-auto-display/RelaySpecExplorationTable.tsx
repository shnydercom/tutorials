import React from "react";
import { createDefaultRelaySpecExplorationTableOptions } from "./accessing-relay-graph-functionality/defaultOptions";

//initialize the known Columns
import { initKnownTableColumns } from "./initknownTableColumns";
import { RelaySpecExplorationTableOptions } from "./accessing-relay-graph-functionality/interfaces";
import { Column } from "react-table";
import { useTableLayout } from "../table";
import { TableSubComponentContextProvider } from "../table/layout/TableSubComponentContext";
import { ExpandedRelayRowSubComponent } from "./ExpandedRelayRowSubComponent";

//setup config
initKnownTableColumns(true);

export interface RelaySpecExplorationTableProps<
  TTableRawData extends object,
  TTableRawArrayElem extends object,
  TSourceDataElem extends object
> {
  rawData: TTableRawData;
  options?: RelaySpecExplorationTableOptions<
    TTableRawData,
    TTableRawArrayElem,
    TSourceDataElem
  >;
}

/**
 * component to display arbitrary tables from sub-graphs defined in the relay spec
 * @param props RelaySpecExplorationTableOptions
 * @returns
 */
export const RelaySpecExplorationTable: <
  TTableRawData extends object,
  TTableRawArrayElem extends object,
  TSourceDataElem extends object
>(
  props: RelaySpecExplorationTableProps<
    TTableRawData,
    TTableRawArrayElem,
    TSourceDataElem
  >
) => JSX.Element = <
  TTableRawData extends object,
  TTableRawArrayElem extends object,
  TSourceDataElem extends object
>(
  props: RelaySpecExplorationTableProps<
    TTableRawData,
    TTableRawArrayElem,
    TSourceDataElem
  >
) => {
  const { rawData, options = createDefaultRelaySpecExplorationTableOptions() } =
    props;
  const { TableLayout } = useTableLayout();
  // assign the dynamic data handling
  const sourceData = React.useMemo<TSourceDataElem[]>(
    () =>
      options
        .rowArrayAccessor(rawData)
        .map(options.rawDataToSourceTransformator),
    [options, rawData]
  );
  // assign the declarative part
  const columns = React.useMemo<Column<TSourceDataElem>[]>(
    () => options.sourceDataToColumnsMapper(sourceData),
    [options, sourceData]
  );
  return (
    <TableSubComponentContextProvider SubComponent={ExpandedRelayRowSubComponent}>
      <TableLayout columns={columns} data={sourceData} />
    </TableSubComponentContextProvider>
  );
};
