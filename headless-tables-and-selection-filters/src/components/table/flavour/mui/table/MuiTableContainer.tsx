import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import TableContainer from "@mui/material/TableContainer";

export const MuiTableContainer = (propsWOChildren = {}) => {
  return <TableContainer {...propsWOChildren}></TableContainer>;
};

export class MuiTableContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren, TDataObj>(
    propsWOChildren?: TPropsWOChildren,
    dataObj?: TDataObj
  ): JSX.Element {
    return <MuiTableContainer {...propsWOChildren} />;
  }
}
