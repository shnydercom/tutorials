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
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<TSourceDataElem>({
      columns,
      data,
    });
  const Outmost = factories.outmostContainer.generateWidget;
  const TableRoot = factories.table.generateWidget;
  const TableHead = factories.head.generateWidget;
  const TableHeaderRow = factories.headerRow.generateWidget;
  const TableHeaderCell = factories.headerCell.generateWidget;
  const TableRow = factories.row.generateWidget;
  const TableCell = factories.cell.generateWidget;
  const TableBody = factories.body.generateWidget;
  return (
    <Outmost>
      <TableRoot getTableProps={getTableProps}>
        <TableHead headerGroups={headerGroups}>
          {headerGroups.map((headerGroup) => (
            <TableHeaderRow headerGroup={headerGroup}>
              {headerGroup.headers.map((columnHG) => (
                <TableHeaderCell headerGroup={columnHG}>
                  {columnHG.render("Header")}
                </TableHeaderCell>
              ))}
            </TableHeaderRow>
          ))}
        </TableHead>
        <TableBody getTableBodyProps={getTableBodyProps} rows={rows}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow row={row}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell cell={cell}>{cell.render("Cell")}</TableCell>
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
