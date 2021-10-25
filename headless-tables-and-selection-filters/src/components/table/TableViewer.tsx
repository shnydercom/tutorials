import React from "react";
import { DynamicMuiTable } from "./flavour/mui/MuiTable";
import { dataObjectToColumn } from "./functionality/dataObjectToColumn";

//initialize the known Columns
import "./knownTableColumnsScript";

export type TableFlavours = "MUI" | "ant";

export interface TableViewerOptions<TQueryData, TArrayElem, TRow> {
  flavour: TableFlavours;
  rowArrayAccessor: (value: TQueryData) => Array<TArrayElem>;
  rowTransformation: (input: TArrayElem) => TRow;
}

export interface TableViewerProps<TQueryData, TArrayElem, TRow> {
  queryData: TQueryData;
  options: TableViewerOptions<TQueryData, TArrayElem, TRow>;
}

export const TableViewer: <TQueryData, TArrayElem, TRow extends object = {}>(
  props: TableViewerProps<TQueryData, TArrayElem, TRow>
) => JSX.Element = ({ queryData, options }) => {
  // assign the dynamic data handling
  const data = React.useMemo(
    () => options.rowArrayAccessor(queryData).map(options.rowTransformation),
    []
  );
  // assign the declarative part
  const columns = React.useMemo(() => dataObjectToColumn(data[0]), []);
  return (
    <div>
      <DynamicMuiTable columns={columns} data={data} />
    </div>
  );
};
