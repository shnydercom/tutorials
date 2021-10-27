import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTableHead from "@mui/material/TableHead";

export const MuiHeadContainer = (props: React.PropsWithChildren<{}>) => {
  return <MuiTableHead {...props}></MuiTableHead>;
};
export class MuiHeadContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps, TDataObj>(
    props?: React.PropsWithChildren<TProps> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    return <MuiHeadContainer {...props} />;
  }
}
