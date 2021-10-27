import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTable from "@mui/material/Table";

export const MuiTableContainer = (props: React.PropsWithChildren<{}>) => {
  return <MuiTable {...props}></MuiTable>;
};

export class MuiTableContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps, TDataObj>(
    props?: React.PropsWithChildren<TProps> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    return <MuiTableContainer {...props} />;
  }
}
