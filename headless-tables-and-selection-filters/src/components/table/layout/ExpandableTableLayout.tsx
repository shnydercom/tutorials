import React from "react";
import { Column, useTable, useExpanded } from "react-table";
import { useFlavour } from "../flavour/useFlavour";
import { rawTableDataElemToColumn } from "../functionality/rawTableDataElemToColumn";
import { isString } from "../functionality/typeGuards";
import { BatteriesIncludedTable } from "../helpers/BatteriesIncludedTable";
import {
  defaultRawDataToSourceTransformator,
  defaultRowAccessor,
} from "../helpers/defaultOptions";

export type ExpandableTableLayoutProps<TSourceDataElem extends object> = {
  columns: ReadonlyArray<Column<TSourceDataElem>>;
  data: readonly TSourceDataElem[];
};

export const ExpandableTableLayout: <TSourceDataElem extends object>(
  props: ExpandableTableLayoutProps<TSourceDataElem>
) => JSX.Element = <TSourceDataElem extends object>(
  props: ExpandableTableLayoutProps<TSourceDataElem>
) => {
  const { columns, data } = props;
  const {
    Body: TableBody,
    BodyCell: TableCell,
    BodyRow: TableRow,
    Head: TableHead,
    HeaderCell: TableHeaderCell,
    HeaderRow: TableHeaderRow,
    Outmost,
    Table: TableRoot,
  } = useFlavour();
  const tableInstance = useTable<TSourceDataElem>(
    {
      columns,
      data,
      defaultColumn: {
        Header: TableHeaderCell,
        Cell: TableCell,
      },
      //find an array on the row to use for automatic expansion
      manualExpandedKey: Object.keys(data[0]).find((aKey) =>
        Array.isArray((data[0] as any)[aKey])
      ),
    },
    useExpanded
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = tableInstance;
  return (
    <Outmost>
      <TableRoot {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableHeaderRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((columnHG) => {
                return isString(columnHG.Header) ? (
                  <TableHeaderCell {...tableInstance} column={columnHG}>
                    {columnHG.render("Header")}
                  </TableHeaderCell>
                ) : (
                  columnHG.render("Header")
                );
              })}
            </TableHeaderRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <React.Fragment {...row.getRowProps()}>
                <TableRow>
                  {row.cells.map((cell) => {
                    return cell.render("Cell");
                  })}
                </TableRow>
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      <BatteriesIncludedTable
                        rawData={row.original}
                        options={{
                          sourceDataToColumnsMapper: rawTableDataElemToColumn,
                          rawDataToSourceTransformator:
                            defaultRawDataToSourceTransformator,
                          rowArrayAccessor: defaultRowAccessor,
                          layout: "simple",
                        }}
                      />
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })}
        </TableBody>
      </TableRoot>
    </Outmost>
  );
};
