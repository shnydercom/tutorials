import React from "react";
import { Column, useTable, useExpanded } from "react-table";
import { ComponentCreatorFnsDictionary } from "../flavour/interfaces";
import { rawTableDataElemToColumn } from "../functionality/rawTableDataElemToColumn";
import { isString } from "../functionality/typeGuards";
import { BatteriesIncludedTable } from "../helpers/BatteriesIncludedTable";
import { defaultRawDataToSourceTransformator, defaultRowAccessor } from "../helpers/defaultOptions";
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export type ExpandableTableLayoutProps<TSourceDataElem extends object> = {
  columns: ReadonlyArray<Column<TSourceDataElem>>;
  data: readonly TSourceDataElem[];
  compCreatorDict: ComponentCreatorFnsDictionary;
  flavour: string;
};

export const ExpandableTableLayout: <TSourceDataElem extends object>(
  props: ExpandableTableLayoutProps<TSourceDataElem>
) => JSX.Element = <TSourceDataElem extends object>(
  props: ExpandableTableLayoutProps<TSourceDataElem>,
) => {
    const { columns, data, compCreatorDict, flavour } = props;
    const TableHeaderCell = compCreatorDict.headerCell;
    const TableCell = compCreatorDict.bodyCell;

    console.log("props", props);

    const tableInstance = useTable<TSourceDataElem>(
      {
        columns,
        data,
        defaultColumn: {
          Header: TableHeaderCell,
          Cell: TableCell,
        },
        //find an array on the row to use for automatic expansion
        expandSubRows: true,
      },
      useExpanded
    );
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      // toggleRowExpanded,
      rowsById,
      visibleColumns,
    } = tableInstance;

    const Outmost = compCreatorDict.outmost;
    const TableRoot = compCreatorDict.table;
    const TableHead = compCreatorDict.head;
    const TableHeaderRow = compCreatorDict.headerRow;
    const TableRow = compCreatorDict.bodyRow;
    const TableBody = compCreatorDict.body;
    const expandedKey = Object.keys(data[0]).find((aKey) => Array.isArray((data[0] as any)[aKey]));

    if (columns && columns.length > 0 && expandedKey !== undefined) {
      // @ts-ignore: Unreachable code error
      columns.splice(0, 0, {
        Header: ' ',
        accessor: ''
      });
    };

    return (
      <Outmost>
        <TableRoot {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup, h_index) => (
              <TableHeaderRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((columnHG, column_i) => {
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
            {rows.map((row, i : any) => {
              prepareRow(row);
              return (
                <React.Fragment>
                  <TableRow {...row.getRowProps()}>
                    {expandedKey !== undefined ? <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root">
                    {  // @ts-ignore: Unreachable code error
                       rowsById[i].original[expandedKey] !== undefined && rowsById[i].original[expandedKey].length > 0 ? <span {...row.getToggleRowExpandedProps()} onClick={() => {
                        const expandedRow = rows.find((row) => row.isExpanded);
                        if (expandedRow) {
                          const isSubItemOfRow = Boolean(
                            expandedRow && row.id.split(".")[0] === expandedRow.id
                          );
                          if (isSubItemOfRow) {
                            const expandedSubItem = expandedRow.subRows.find(
                              (subRow) => subRow.isExpanded
                            );
      
                            if (expandedSubItem) {
                              const isClickedOnExpandedSubItem =
                                expandedSubItem.id === row.id;
                              if (!isClickedOnExpandedSubItem) {
                                // toggleRowExpanded([expandedRow.id], false);
                              }
                            }
                          } else {
                            // toggleRowExpanded([expandedRow.id], false);
                          }
                        }
                        row.toggleRowExpanded();
                      }}>
                        <IconButton
                          aria-label="expand row"
                          size="small"
                        >
                        {row.isExpanded ? (
                          flavour === 'defaulthtml' ? <span>🔽</span> : <ArrowUpwardIcon fontSize="small" />
                        ) : (
                          flavour === 'defaulthtml' ? <span>🔼</span> : <ArrowDownwardIcon fontSize="small" />
                        )}
                        </IconButton>
                      </span> : ""}
                    </td> : ""}
                    {row.cells.map((cell) => {
                     if (cell.value !== undefined) {
                      return cell.render("Cell");
                     }
                    })}
                  </TableRow>
                  {row.isExpanded ? (
                    <tr className="child-table">
                      <td colSpan={visibleColumns.length}>
                        <BatteriesIncludedTable
                          rawData={row.original} options={
                            {
                              sourceDataToColumnsMapper: rawTableDataElemToColumn,
                              rawDataToSourceTransformator: defaultRawDataToSourceTransformator,
                              rowArrayAccessor: defaultRowAccessor,
                              compCreatorDict,
                              layout: "expandable",
                              // @ts-ignore: Unreachable code error
                              flavour
                            }
                          } />
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
