import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTableCell from "@mui/material/TableCell";

export const MuiCellContainer = (propsWOChildren = {}) => {
  return <MuiTableCell {...propsWOChildren}></MuiTableCell>;
};
export class MuiCellContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren, TDataObj>(
    propsWOChildren?: TPropsWOChildren,
    dataObj?: TDataObj
  ): JSX.Element {
    return <MuiCellContainer {...propsWOChildren} />;
  }
}
