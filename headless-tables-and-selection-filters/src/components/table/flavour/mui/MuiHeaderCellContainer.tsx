import { BasicCell } from "./bodycell-renderer/BasicCell";
import { HeaderCellRenderer } from "../interfaces";
import { SorterCell } from "./headercell-renderer/SorterCell";
import { HeaderProps } from "react-table";

export const MuiHeaderCellContainer: HeaderCellRenderer = (
  props: React.PropsWithChildren<HeaderProps<{}>>
) => {
  const { value, children } = props;
  const {
    isSorted,
    isSortedDesc,
    canSort,
    getSortByToggleProps,
    getHeaderProps,
  } = props.column;
  if (canSort) {
    const newProps = {
      ...getHeaderProps(getSortByToggleProps()),
      isSorted: !!isSorted,
      isSortedDesc: !!isSortedDesc,
      children,
    };
    return (
      <SorterCell {...newProps}>
        {children && value ? children : value || children}
      </SorterCell>
    );
  }
  const newProps = {
    ...getHeaderProps(),
    children,
  };
  return (
    <BasicCell {...newProps}>
      {children && value ? children : value || children}
    </BasicCell>
  );
};
