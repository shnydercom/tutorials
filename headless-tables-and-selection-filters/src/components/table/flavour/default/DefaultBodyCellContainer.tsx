
import { CellRenderer } from "../interfaces";
import { BasicCell } from "./cell-renderer/BasicCell";

export const DefaultBodyCellContainer: CellRenderer = ({
  cell,
  value,
  children,
}) => {
  const newProps = { ...cell.getCellProps() };
  return <BasicCell {...newProps}>{children && value ? children : value || children}</BasicCell>;
};
