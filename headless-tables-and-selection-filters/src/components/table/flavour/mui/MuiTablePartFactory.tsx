import { HeaderGroup, Row } from "react-table";

import MuiTableHead from "@mui/material/TableHead";
import MuiTableRow from "@mui/material/TableRow";
import MuiTableCell from "@mui/material/TableCell";
import MuiTableBody from "@mui/material/TableBody";

export class MuiTablePartFactory {
  generateHeadReactWidget<TDataObj extends object>(
    headerGroups: HeaderGroup<TDataObj>[]
  ): JSX.Element {
    return (
      <MuiTableHead>
        {headerGroups.map((headerGroup) => (
          <MuiTableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <MuiTableCell {...column.getHeaderProps()}>
                {column.render("Header")}
              </MuiTableCell>
            ))}
          </MuiTableRow>
        ))}
      </MuiTableHead>
    );
  }

  generateBodyReactWidget<TDataObj extends object>(
    rows:  Row<TDataObj>[],
    prepareRow: (row: Row<TDataObj>) => void
  ): JSX.Element {
    return <MuiTableBody>
      {rows.map((row, i) => {
          prepareRow(row)
          return (
            <MuiTableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <MuiTableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </MuiTableCell>
                )
              })}
            </MuiTableRow>
          )
        })}
    </MuiTableBody>
  }
}

export const factory = new MuiTablePartFactory();