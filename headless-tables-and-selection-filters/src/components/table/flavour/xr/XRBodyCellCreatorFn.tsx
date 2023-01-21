
import { AvailableColumnIds } from "../../domain-information";
import { CellRenderer } from "../interfaces";
import { BasicCell } from "./cell-renderer/BasicCell";
import { GQLTypeIconCell } from "./cell-renderer/GQLTypeIconCell";

export const XRBodyCellCreatorFn: CellRenderer = ({
  cell,
  value,
  children,
  column
}) => {
  const newProps = { ...cell.getCellProps() };
  if(column.id === AvailableColumnIds.__typename){
    return <GQLTypeIconCell {...newProps} value={value}>{children && value ? children : value || children}</GQLTypeIconCell>;
  }
  return <BasicCell {...newProps}>{children && value ? children : value || children}</BasicCell>;
};
