import React from "react";
import { DynamicMuiTable } from "./flavour/mui/MuiTable";
import { dataObjectToColumn } from "./functionality/dataObjectToColumn";

//initialize the known Columns
import { initKnownTableColumns } from "./config/initknownTableColumns";
import { TableViewerOptions } from "./config/interfaces";
import { SimpleTableLayout } from "./layout/SimpleTableLayout";

//setup config
initKnownTableColumns(true);

export interface TableViewerProps<
  TQueryData,
  TArrayElem,
  TRow
> {
  queryData: TQueryData;
  options: TableViewerOptions<TQueryData, TArrayElem, TRow>;
}

export const TableViewer: <TQueryData, TArrayElem, TRow extends object = {}>(
  props: TableViewerProps<TQueryData, TArrayElem, TRow>
) => JSX.Element = ({ queryData, options }) => {
  // assign the dynamic data handling
  const data = React.useMemo(
    () =>
      options
        .rowArrayAccessor(queryData)
        .map(options.rowTransformation),
    []
  );
  // assign the declarative part
  const columns = React.useMemo(() => [...dataObjectToColumn(data[0])], []);
  return (
    <div>
      <DynamicMuiTable columns={columns} data={data} />
      <SimpleTableLayout columns={columns} data={data} factories={options.tablePartFactories}/>
    </div>
  );
};
