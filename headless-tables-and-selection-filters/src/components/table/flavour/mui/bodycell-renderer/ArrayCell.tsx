import MuiTableCell, { TableCellProps } from "@mui/material/TableCell";
export interface ArrayCellProps {
  value: unknown[];
}

const arrayCountI18n = (a: unknown[]) => {
  if (a.length === 0) return "none";
  return `more (${a.length})`;
};

export const ArrayCell = (props: React.PropsWithChildren<ArrayCellProps>) => {
  const { children, value, ...remainingProps } = props;
  const cellText = arrayCountI18n(value);
  return <MuiTableCell {...remainingProps}>{cellText}</MuiTableCell>;
};
