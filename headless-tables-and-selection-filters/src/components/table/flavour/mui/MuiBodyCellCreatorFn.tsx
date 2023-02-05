import { AvailableColumnIds } from "../../domain-information";
import { CellRenderer } from "../interfaces";
import { ArrayCell } from "./bodycell-renderer/ArrayCell";
import { BasicCell } from "./bodycell-renderer/BasicCell";
import { GQLTypeIconCell } from "./bodycell-renderer/GQLTypeIconCell";

export const MuiBodyCellCreatorFn: CellRenderer = ({
  cell,
  column,
  value,
  children,
  colSpan,
}) => {
  const newProps = { ...cell.getCellProps(), colSpan };
  if (column.id === AvailableColumnIds.__typename) {
    return (
      <GQLTypeIconCell {...newProps} value={value}>
        {children && value ? children : value || children}
      </GQLTypeIconCell>
    );
  }
  if (Array.isArray(value)) {
    return <ArrayCell {...newProps} value={value}></ArrayCell>;
  }
  return (
    <BasicCell {...newProps}>
      {children && value ? children : value || children}
    </BasicCell>
  );
};
