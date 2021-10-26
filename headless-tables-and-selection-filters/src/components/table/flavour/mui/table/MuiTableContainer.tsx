import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTable from "@mui/material/Table";

export const MuiTableContainer = (propsWOChildren: React.PropsWithChildren<{}>) => {
  return <MuiTable {...propsWOChildren}></MuiTable>;
};

export class MuiTableContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren, TDataObj>(
    propsWOChildren?: React.PropsWithChildren<TPropsWOChildren> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    return <MuiTableContainer {...propsWOChildren} />;
  }
}
