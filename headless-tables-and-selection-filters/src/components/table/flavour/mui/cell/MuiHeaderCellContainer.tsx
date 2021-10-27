import React from "react";
import MuiTableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import { MuiCellContainer } from "./MuiCellContainer";
import { FactoryFnForHeaderGroup } from "../../flavourFactoryFunctionTypes";

export const MuiSortingCellContainer = ({
  isSorted,
  isSortedDesc,
  children,
  ...handDown
}: React.PropsWithChildren<{
  isSorted: boolean;
  isSortedDesc: boolean;
}>): JSX.Element => {
  return (
    <MuiTableCell {...handDown}>
      <TableSortLabel
        active={isSorted}
        direction={isSortedDesc ? "desc" : "asc"}
      >
        {children}
      </TableSortLabel>
    </MuiTableCell>
  );
};

export class MuiHeaderCellContainerFactory {
  generateWidget: FactoryFnForHeaderGroup<any> = ({
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
      return <MuiSortingCellContainer {...newProps} />;
    }
    const newProps = {
      ...headerGroup.getHeaderProps(),
      children,
    };
    return <MuiCellContainer {...newProps} />;
  };
}
