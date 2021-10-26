import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTableHead from "@mui/material/TableHead";

export const MuiHeadContainer = (propsWOChildren: React.PropsWithChildren<{}>) => {
  return <MuiTableHead {...propsWOChildren}></MuiTableHead>;
};
export class MuiHeadContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren, TDataObj>(
    propsWOChildren?: React.PropsWithChildren<TPropsWOChildren> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    return <MuiHeadContainer {...propsWOChildren} />;
  }
}
