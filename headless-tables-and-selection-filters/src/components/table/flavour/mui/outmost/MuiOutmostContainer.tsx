import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTableContainer from "@mui/material/TableContainer";

export const MuiOutmostContainer = (propsWOChildren: React.PropsWithChildren<{}>) => {
  return <MuiTableContainer {...propsWOChildren}></MuiTableContainer>;
};

export class MuiOutmostContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren, TDataObj>(
    propsWOChildren?: React.PropsWithChildren<TPropsWOChildren> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    return <MuiOutmostContainer {...propsWOChildren}/>;
  }
}
