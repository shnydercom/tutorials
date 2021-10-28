import React from "react";
import { createDefaultTableViewerOptions } from "./config/defaultOptions";

//initialize the known Columns
import { initKnownTableColumns } from "./config/initknownTableColumns";
import { TableViewerOptions } from "./config/interfaces";
import { SimpleTableLayout } from "./layout/SimpleTableLayout";
import { SortingTableLayout } from "./layout/SortingTableLayout";

//setup config
initKnownTableColumns(true);

export interface TableViewerProps<
  TTableRawData extends object,
  TTableRawArrayElem extends object,
  TSourceDataElem extends object
> {
  rawData: TTableRawData;
  options?: TableViewerOptions<
    TTableRawData,
    TTableRawArrayElem,
    TSourceDataElem
  >;
}

/**
 * component to display arbitrary tables from source data
 * @param props TableViewerOptions 
 * @returns 
 */
export const TableViewer: <
  TTableRawData extends object,
  TTableRawArrayElem extends object,
  TSourceDataElem extends object = {}
>(
  props: TableViewerProps<TTableRawData, TTableRawArrayElem, TSourceDataElem>
) => JSX.Element = ({ rawData, options = createDefaultTableViewerOptions() }) => {
  // assign the dynamic data handling
  const sourceData = React.useMemo(
    () =>
      options
        .rowArrayAccessor(rawData)
        .map(options.rawDataToSourceTransformator),
    [options, rawData]
  );
  // assign the declarative part
  const columns = React.useMemo(
    () => [...options.sourceDataToColumnsMapper(sourceData)],
    [options, sourceData]
  );
  switch (options.layout) {
    case "sorting":
      return (
        <SortingTableLayout
          columns={columns}
          data={sourceData}
          factories={options.tablePartFactories}
        />
      );
    default:
      return (
        <SimpleTableLayout
          columns={columns}
          data={sourceData}
          factories={options.tablePartFactories}
        />
      );
  }
};
