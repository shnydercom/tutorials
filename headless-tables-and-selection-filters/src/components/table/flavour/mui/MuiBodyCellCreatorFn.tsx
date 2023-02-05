import { AvailableColumnIds, RelayConnectionKeyword } from "../../domain-information";
import GQLConnectionRenderer from "../default/cell-renderer/GQLConnectionRenderer";
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
  if (column.id.endsWith(RelayConnectionKeyword)) {
    return (
      <BasicCell {...newProps}>
        {value ? <GQLConnectionRenderer value={value} /> : null}
      </BasicCell>
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
