import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTableContainer from "@mui/material/TableContainer";

export const MuiOutmostContainer = (props: React.PropsWithChildren<{}>) => {
  return <MuiTableContainer {...props}></MuiTableContainer>;
};

export class MuiOutmostContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps, TDataObj>(
    props?: React.PropsWithChildren<TProps> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    return <MuiOutmostContainer {...props}/>;
  }
}
