import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTableRow from "@mui/material/TableRow";

export const MuiRowContainer = (propsWOChildren: React.PropsWithChildren<{}>) => {
  return <MuiTableRow {...propsWOChildren}></MuiTableRow>;
};

export class MuiRowContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren, TDataObj>(
    propsWOChildren?: React.PropsWithChildren<TPropsWOChildren> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    return <MuiRowContainer {...propsWOChildren} />;
  }
}
