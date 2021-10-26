import React from "react";
import { Column, useSortBy, useTable } from "react-table";
import { AvailableTableFactories } from "../config/interfaces";

export type SortingTableLayoutProps<TDataObj extends object> = {
  columns: ReadonlyArray<Column<TDataObj>>;
  data: readonly TDataObj[];
  factories: AvailableTableFactories;
};

export const SortingTableLayout: <TDataObj extends object>(
  props: SortingTableLayoutProps<TDataObj>
) => JSX.Element = <TDataObj extends object>(
  props: SortingTableLayoutProps<TDataObj>
) => {
  const { columns, data, factories } = props;
  const { getTableProps, headerGroups, rows, prepareRow } = useTable<TDataObj>(
    {
      columns,
      data,
    },
    useSortBy
  );
  const Outmost = factories.outmostContainer.generateReactWidget;
  const TableRoot = factories.table.generateReactWidget;
  const TableHead = factories.head.generateReactWidget;
  const TableRow = factories.row.generateReactWidget;
  const TableCell = factories.cell.generateReactWidget;
  const TableBody = factories.body.generateReactWidget;
  return (
    <Outmost>
      <TableRoot>
        <TableHead {...getTableProps()}>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  dataObj={column}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()} dataObj={cell}>
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </TableRoot>
    </Outmost>
  );
};
