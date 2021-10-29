import { CellRenderer } from "../interfaces";
import { BasicCell } from "./bodycell-renderer/BasicCell";

export const MuiBodyCellContainer: CellRenderer = ({
  cell,
  value,
  children,
}) => {
  const newProps = { ...cell.getCellProps() };
  return <BasicCell {...newProps}>{children && value ? children : value || children}</BasicCell>;
};
