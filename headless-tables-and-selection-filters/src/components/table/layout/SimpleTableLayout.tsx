import { Column, useTable } from "react-table";
import { ComponentCreatorFnsDictionary } from "../flavour/interfaces";
import { isString } from "../functionality/typeGuards";

export type SimpleTableLayoutProps<TSourceDataElem extends object> = {
  columns: ReadonlyArray<Column<TSourceDataElem>>;
  data: readonly TSourceDataElem[];
  compCreatorDict: ComponentCreatorFnsDictionary;
};

export const SimpleTableLayout: <TSourceDataElem extends object>(
  props: SimpleTableLayoutProps<TSourceDataElem>
) => JSX.Element = <TSourceDataElem extends object>(
  props: SimpleTableLayoutProps<TSourceDataElem>
) => {
  const { columns, data, compCreatorDict } = props;
  const TableHeaderCell = compCreatorDict.headerCell;
  const TableCell = compCreatorDict.bodyCell;
  const tableInstance = useTable<TSourceDataElem>(
    {
      columns,
      data,
      defaultColumn: {
        Header: TableHeaderCell,
        Cell: TableCell,
      },
    },
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  const Outmost = compCreatorDict.outmost;
  const TableRoot = compCreatorDict.table;
  const TableHead = compCreatorDict.head;
  const TableHeaderRow = compCreatorDict.headerRow;
  const TableRow = compCreatorDict.bodyRow;
  const TableBody = compCreatorDict.body;
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
              <TableRow>
                {row.cells.map((cell) => {
                  return cell.render("Cell");
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </TableRoot>
    </Outmost>
  );
};
