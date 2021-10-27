import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTable from "@mui/material/Table";

export const MuiTableContainer = (props: React.PropsWithChildren<{}>) => {
  return <MuiTable {...props}></MuiTable>;
};

export class MuiTableContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps, TrtAPIObj>(
    props?: React.PropsWithChildren<TProps> & {
      rtAPIObj?: TrtAPIObj;
    }
  ): JSX.Element {
    return <MuiTableContainer {...props} />;
  }
}
