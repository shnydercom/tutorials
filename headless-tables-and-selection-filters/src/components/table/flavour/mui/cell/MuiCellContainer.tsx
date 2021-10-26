import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import { isColumn } from "../../../functionality/typeGuards";

export const MuiCellContainer = (
  propsWOChildren: React.PropsWithChildren<{}>
) => {
  return <MuiTableCell {...propsWOChildren}></MuiTableCell>;
};

export const MuiSortingCellContainer = (
  propsWOChildren: React.PropsWithChildren<{}>,
  isSorted: boolean,
  isSortedDesc: boolean
) => {
  return (
    <MuiTableCell {...propsWOChildren}>
      <TableSortLabel
        active={isSorted}
        direction={isSortedDesc ? "desc" : "asc"}
      >
        {propsWOChildren.children}
      </TableSortLabel>
    </MuiTableCell>
  );
};

export class MuiCellContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren, TDataObj>(
    propsWOChildren?: React.PropsWithChildren<TPropsWOChildren> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    const handDown = { ...propsWOChildren };
    if (handDown.dataObj) delete handDown.dataObj;
    if (isColumn(propsWOChildren?.dataObj)) {
      return MuiSortingCellContainer(
        { ...handDown },
        (propsWOChildren?.dataObj as any).isSorted, //TODO: fix any
        (propsWOChildren?.dataObj as any).isSortedDesc
      );
    }
    return <MuiCellContainer {...handDown} />;
  }
}
