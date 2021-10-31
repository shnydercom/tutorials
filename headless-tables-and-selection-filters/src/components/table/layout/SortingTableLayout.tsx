import { Column, useSortBy, useTable } from "react-table";
import { ContainerComponentsDictionary } from "../flavour/interfaces";
import { isString } from "../functionality/typeGuards";

export type SortingTableLayoutProps<TSourceDataElem extends object> = {
  columns: ReadonlyArray<Column<TSourceDataElem>>;
  data: readonly TSourceDataElem[];
  containerCompDict: ContainerComponentsDictionary;
};

export const SortingTableLayout: <TSourceDataElem extends object>(
  props: SortingTableLayoutProps<TSourceDataElem>
) => JSX.Element = <TSourceDataElem extends object>(
  props: SortingTableLayoutProps<TSourceDataElem>
) => {
  const { columns, data, containerCompDict } = props;
  const TableHeaderCell = containerCompDict.headerCell;
  const TableCell = containerCompDict.bodyCell;
  const tableInstance = useTable<TSourceDataElem>(
    {
      columns,
      data,
      defaultColumn: {
        Header: TableHeaderCell,
        Cell: TableCell,
      },
    },
    useSortBy
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  const Outmost = containerCompDict.outmost;
  const TableRoot = containerCompDict.table;
  const TableHead = containerCompDict.head;
  const TableHeaderRow = containerCompDict.headerRow;
  const TableRow = containerCompDict.bodyRow;
  const TableBody = containerCompDict.body;
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
