import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTableRow from "@mui/material/TableRow";
import { FactoryFnForRow } from "../../flavourFactoryFunctionTypes";

export const MuiRowContainer = (props: React.PropsWithChildren<{}>) => {
  return <MuiTableRow {...props}></MuiTableRow>;
};

export class MuiRowContainerFactory extends AbstractTablePartFactory {
  generateWidget: FactoryFnForRow<any> = ({ row, children }) => {
    const newProps = { children };
    return <MuiRowContainer {...newProps} />;
  };
}
