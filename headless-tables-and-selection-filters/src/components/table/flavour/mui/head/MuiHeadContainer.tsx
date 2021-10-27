import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTableHead from "@mui/material/TableHead";

export const MuiHeadContainer = (props: React.PropsWithChildren<{}>) => {
  return <MuiTableHead {...props}></MuiTableHead>;
};
export class MuiHeadContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps, TrtAPIObj>(
    props?: React.PropsWithChildren<TProps> & {
      rtAPIObj?: TrtAPIObj;
    }
  ): JSX.Element {
    return <MuiHeadContainer {...props} />;
  }
}
