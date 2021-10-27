import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import { isColumn } from "../../../functionality/typeGuards";
import { Column, UseSortByColumnProps } from "react-table";

export const MuiCellContainer = (props: React.PropsWithChildren<{}>) => {
  return <MuiTableCell {...props}></MuiTableCell>;
};

export const MuiSortingCellContainer: React.FC<
  React.PropsWithChildren<{
    isSorted: boolean;
    isSortedDesc: boolean;
  }>
> = ({ isSorted, isSortedDesc, ...handDown }) => {
  return (
    <MuiTableCell {...handDown}>
      <TableSortLabel
        active={isSorted}
        direction={isSortedDesc ? "desc" : "asc"}
      >
        {handDown.children}
      </TableSortLabel>
    </MuiTableCell>
  );
};

export class MuiCellContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<
    TProps,
    TDataObj extends UseSortByColumnProps<{}> | Column
  >(
    props: React.PropsWithChildren<
      TProps & {
        dataObj: TDataObj;
      }
    >
  ): JSX.Element {
    const { dataObj, ...handDown } = props;
    if (isColumn(props?.dataObj)) {
      const { isSorted, isSortedDesc } = dataObj as any;
      const newProps = {
        ...handDown,
        isSorted,
        isSortedDesc,
      };
      return <MuiSortingCellContainer {...newProps} />;
    }
    debugger;
    return <MuiCellContainer {...handDown} />;
  }
}
