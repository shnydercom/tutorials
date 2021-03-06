import React from "react";
import { createDefaultBatteriesIncludedTableOptions } from "./defaultOptions";

//initialize the known Columns
import { initKnownTableColumns } from "./initknownTableColumns";
import { BatteriesIncludedTableOptions } from "./interfaces";
import { SimpleTableLayout } from "../layout/SimpleTableLayout";
import { SortingTableLayout } from "../layout/SortingTableLayout";
import { Column } from "react-table";
import { ExpandableTableLayout } from "../layout/ExpandableTableLayout";

//setup config
initKnownTableColumns(true);

export interface BatteriesIncludedTableProps<
  TTableRawData extends object,
  TTableRawArrayElem extends object,
  TSourceDataElem extends object
  > {
  rawData: TTableRawData;
  options?: BatteriesIncludedTableOptions<
    TTableRawData,
    TTableRawArrayElem,
    TSourceDataElem
  >;
}


/**
 * component to display arbitrary tables from source data
 * @param props BatteriesIncludedTableOptions
 * @returns
 */
export const BatteriesIncludedTable: <
  TTableRawData extends object,
  TTableRawArrayElem extends object,
  TSourceDataElem extends object
  >(
  props: BatteriesIncludedTableProps<
    TTableRawData,
    TTableRawArrayElem,
    TSourceDataElem
  >
) => JSX.Element = <
  TTableRawData extends object,
  TTableRawArrayElem extends object,
  TSourceDataElem extends object
>(
  props: BatteriesIncludedTableProps<
    TTableRawData,
    TTableRawArrayElem,
    TSourceDataElem
  >
) => {
    const { rawData, options = createDefaultBatteriesIncludedTableOptions() } =
      props;
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
    )
    switch (options.layout) {
      case "sorting":
        return (
          <SortingTableLayout
            columns={columns}
            data={sourceData}
            compCreatorDict={options.compCreatorDict}
          />
        );
      case "expandable":
        return (
          <ExpandableTableLayout
            columns={columns}
            data={sourceData}
            compCreatorDict={options.compCreatorDict} />
        )
      default:
        return (
          <SimpleTableLayout
            columns={columns}
            data={sourceData}
            compCreatorDict={options.compCreatorDict}
          />
        );
    }
  };
