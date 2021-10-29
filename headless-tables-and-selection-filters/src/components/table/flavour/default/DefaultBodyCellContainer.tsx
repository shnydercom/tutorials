
import { CellRenderer } from "../interfaces";
import { BasicCell } from "./cell-renderer/BasicCell";

export const DefaultBodyCellContainer: CellRenderer = ({ cell, children }) => {
  const newProps = { ...cell.getCellProps(), children };
  return <BasicCell {...newProps} />;
};
