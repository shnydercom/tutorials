import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTableRow from "@mui/material/TableRow";

export const MuiRowContainer = (props: React.PropsWithChildren<{}>) => {
  return <MuiTableRow {...props}></MuiTableRow>;
};

export class MuiRowContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps, TDataObj>(
    props?: React.PropsWithChildren<TProps> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    return <MuiRowContainer {...props} />;
  }
}
