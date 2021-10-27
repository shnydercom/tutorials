import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import { isColumn } from "../../../functionality/typeGuards";
import { Column, UseSortByColumnProps } from "react-table";
import { JsxElement } from "typescript";

export const MuiCellContainer = (props: React.PropsWithChildren<{}>) => {
  return <MuiTableCell {...props}></MuiTableCell>;
};

export const MuiSortingCellContainer = ({
  isSorted,
  isSortedDesc,
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
        {handDown.children}
      </TableSortLabel>
    </MuiTableCell>
  );
};

export class MuiCellContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps, TrtAPIObj>(
    props: React.PropsWithChildren<TProps> & {
      rtAPIObj?: TrtAPIObj;
    }
  ): JSX.Element {
    const { rtAPIObj, ...handDown } = props;
    if (isColumn(props?.rtAPIObj)) {
      const { isSorted, isSortedDesc } = rtAPIObj as any;
      const newProps = {
        ...handDown,
        isSorted,
        isSortedDesc,
      };
      return <MuiSortingCellContainer {...newProps}/>;
    }
    return <MuiCellContainer {...props} />;
  }
}
