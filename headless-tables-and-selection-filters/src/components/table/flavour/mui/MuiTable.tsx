import MuiTable from "@mui/material/Table";
import MuiTableContainer from "@mui/material/TableContainer";
import { Column, useTable } from "react-table";
import {
  factory,
} from "./MuiTablePartFactory";

export type DynamicMuiTableProps<TDataObj extends object> = {
  columns: ReadonlyArray<Column<TDataObj>>;
  data: readonly TDataObj[];
};

export const DynamicMuiTable: <TDataObj extends object>(
  props: DynamicMuiTableProps<TDataObj>
) => JSX.Element = <TDataObj extends object>(
  props: DynamicMuiTableProps<TDataObj>
) => {
  const { columns, data } = props;
  const { getTableProps, headerGroups, rows, prepareRow } = useTable<TDataObj>({
    columns,
    data,
  });
  return (
    <MuiTableContainer>
      <MuiTable {...getTableProps()}>
        {factory.generateHeadReactWidget(headerGroups)}
        {factory.generateBodyReactWidget(rows, prepareRow)}
      </MuiTable>
    </MuiTableContainer>
  );
};
