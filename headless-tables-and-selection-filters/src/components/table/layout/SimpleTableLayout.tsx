import React from "react";
import { Column, useTable } from "react-table";
import { AvailableTableFactories } from "../config/interfaces";

export type SimpleTableLayoutProps<TSourceDataElem extends object> = {
  columns: ReadonlyArray<Column<TSourceDataElem>>;
  data: readonly TSourceDataElem[];
  factories: AvailableTableFactories;
};

export const SimpleTableLayout: <TSourceDataElem extends object>(
  props: SimpleTableLayoutProps<TSourceDataElem>
) => JSX.Element = <TSourceDataElem extends object>(
  props: SimpleTableLayoutProps<TSourceDataElem>
) => {
  const { columns, data, factories } = props;
  const { getTableProps, headerGroups, rows, prepareRow } = useTable<TSourceDataElem>({
    columns,
    data,
  });
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
                <TableCell {...column.getHeaderProps()}>
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
                    <TableCell {...cell.getCellProps()}>
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
