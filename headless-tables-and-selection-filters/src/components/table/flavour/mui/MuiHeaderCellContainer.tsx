import { BasicCell } from "./cell-renderer/BasicCell";
import { HeaderCellRenderer } from "../interfaces";
import { SorterCell } from "./cell-renderer/SorterCell";

export const MuiHeaderCellContainer: HeaderCellRenderer = ({
  headerGroup,
  children,
}) => {
  const { isSorted, isSortedDesc } = headerGroup;
  if (headerGroup.canSort) {
    const newProps = {
      ...headerGroup.getHeaderProps(headerGroup.getSortByToggleProps()),
      isSorted: !!isSorted,
      isSortedDesc: !!isSortedDesc,
      children,
    };
    return <SorterCell {...newProps} />;
  }
  const newProps = {
    ...headerGroup.getHeaderProps(),
    children,
  };
  return <BasicCell {...newProps} />;
};
