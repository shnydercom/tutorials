import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTableRow from "@mui/material/TableRow";

export const MuiRowContainer = (propsWOChildren = {}) => {
  return <MuiTableRow {...propsWOChildren}></MuiTableRow>;
};

export class MuiRowContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren, TDataObj>(
    propsWOChildren?: TPropsWOChildren,
    dataObj?: TDataObj
  ): JSX.Element {
    return <MuiRowContainer {...propsWOChildren} />;
  }
}
