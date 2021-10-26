import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTableHead from "@mui/material/TableHead";

export const MuiHeadContainer = (propsWOChildren = {}) => {
  return <MuiTableHead {...propsWOChildren}></MuiTableHead>;
};
export class MuiHeadContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren, TDataObj>(
    propsWOChildren?: TPropsWOChildren,
    dataObj?: TDataObj
  ): JSX.Element {
    return <MuiHeadContainer {...propsWOChildren} />;
  }
}
