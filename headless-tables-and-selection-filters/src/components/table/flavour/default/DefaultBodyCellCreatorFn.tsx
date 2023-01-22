import { AvailableColumnIds } from "../../domain-information";
import { CellRenderer } from "../interfaces";
import { BasicCell } from "./cell-renderer/BasicCell";
import { GQLTypeIconCell } from "./cell-renderer/GQLTypeIconCell";

export const DefaultBodyCellCreatorFn: CellRenderer = ({
  cell,
  value,
  children,
  column,
  colSpan
}) => {
  const newProps = { ...cell.getCellProps(), colSpan };
  if(column.id === AvailableColumnIds.__typename){
    return <GQLTypeIconCell {...newProps} value={value}>{children && value ? children : value || children}</GQLTypeIconCell>;
  }
  return <BasicCell {...newProps}>{children && value ? children : value || children}</BasicCell>;
};
