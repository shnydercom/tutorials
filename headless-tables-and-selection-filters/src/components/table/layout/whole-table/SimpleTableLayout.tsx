import { Column, useTable } from "react-table";
import { useFlavour } from "../../flavour/useFlavour";
import { isString } from "../../non-visual-functionality/typeGuards";

export type SimpleTableLayoutProps<TSourceDataElem extends object> = {
  columns: ReadonlyArray<Column<TSourceDataElem>>;
  data: readonly TSourceDataElem[];
};

export const SimpleTableLayout: <TSourceDataElem extends object>(
  props: SimpleTableLayoutProps<TSourceDataElem>
) => JSX.Element = <TSourceDataElem extends object>(
  props: SimpleTableLayoutProps<TSourceDataElem>
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
  const tableInstance = useTable<TSourceDataElem>({
    columns,
    data,
    defaultColumn: {
      Header: TableHeaderCell,
      Cell: TableCell,
    },
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <Outmost>
      <TableRoot {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableHeaderRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((columnHG) => {
                return isString(columnHG.Header) ? (
                  <TableHeaderCell
                    {...tableInstance}
                    column={columnHG}
                    key={columnHG.id}
                  >
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
              <TableRow key={row.id}>
                {row.cells.map((cell) => {
                  return cell.render("Cell", {
                    key: cell.getCellProps().key,
                  });
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </TableRoot>
    </Outmost>
  );
};