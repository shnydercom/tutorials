import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTableContainer from "@mui/material/TableContainer";
import { FactoryFnForOutmost } from "../../flavourFactoryFunctionTypes";

export const MuiOutmostContainer = (props: React.PropsWithChildren<{}>) => {
  return <MuiTableContainer {...props}></MuiTableContainer>;
};

export class MuiOutmostContainerFactory extends AbstractTablePartFactory {
  generateWidget: FactoryFnForOutmost = (props) => {
    return <MuiOutmostContainer {...props} />;
  };
}
