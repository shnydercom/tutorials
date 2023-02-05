import {
  AvailableColumnIds,
  RelayConnectionKeyword,
} from "../../domain-information";
import { CellRenderer } from "../interfaces";
import { ArrayCell } from "./cell-renderer/ArrayCell";
import { BasicCell } from "./cell-renderer/BasicCell";
import GQLConnectionRenderer from "./cell-renderer/GQLConnectionRenderer";
import { GQLTypeIconCell } from "./cell-renderer/GQLTypeIconCell";

export const DefaultBodyCellCreatorFn: CellRenderer = ({
  cell,
  value,
  children,
  column,
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
