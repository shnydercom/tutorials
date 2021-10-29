import MuiTableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";

export const SorterCell = ({
    isSorted,
    isSortedDesc,
    children,
    ...handDown
  }: React.PropsWithChildren<{
    isSorted: boolean;
    isSortedDesc: boolean;
  }>): JSX.Element => {
    return (
      <MuiTableCell {...handDown}>
        <TableSortLabel
          active={isSorted}
          direction={isSortedDesc ? "desc" : "asc"}
        >
          {children}
        </TableSortLabel>
      </MuiTableCell>
    );
  };