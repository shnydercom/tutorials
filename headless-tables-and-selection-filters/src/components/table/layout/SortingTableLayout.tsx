import React from "react";
import { Column, useSortBy, useTable } from "react-table";
import { ContainerComponentsDictionary } from "../flavour/interfaces";

export type SortingTableLayoutProps<TSourceDataElem extends object> = {
  columns: ReadonlyArray<Column<TSourceDataElem>>;
  data: readonly TSourceDataElem[];
  containerCompDict:  ContainerComponentsDictionary;
};

export const SortingTableLayout: <TSourceDataElem extends object>(
  props: SortingTableLayoutProps<TSourceDataElem>
) => JSX.Element = <TSourceDataElem extends object>(
  props: SortingTableLayoutProps<TSourceDataElem>
) => {
  const { columns, data, containerCompDict } = props;
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<TSourceDataElem>(
      {
        columns,
        data,
      },
      useSortBy
    );
  const Outmost = containerCompDict.outmost;
  const TableRoot = containerCompDict.table;
  const TableHead = containerCompDict.head;
  const TableHeaderRow = containerCompDict.headerRow;
  const TableHeaderCell = containerCompDict.headerCell;
  const TableRow = containerCompDict.bodyRow;
  const TableCell = containerCompDict.bodyCell;
  const TableBody = containerCompDict.body;
  return (
    <Outmost>
      <TableRoot {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableHeaderRow
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((columnHG) => (
                <TableHeaderCell headerGroup={columnHG}>
                  {columnHG.render("Header")}
                </TableHeaderCell>
              ))}
            </TableHeaderRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow>
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
