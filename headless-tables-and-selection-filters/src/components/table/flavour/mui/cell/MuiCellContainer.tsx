import React from "react";
import MuiTableCell from "@mui/material/TableCell";
import { FactoryFnForCell } from "../../flavourFactoryFunctionTypes";

export const MuiCellContainer = (props: React.PropsWithChildren<{}>) => {
  return <MuiTableCell {...props}></MuiTableCell>;
};

export class MuiCellContainerFactory {
  generateWidget: FactoryFnForCell<any> = ({ cell, children }) => {
    const newProps = { ...cell.getCellProps(), children };
    return <MuiCellContainer {...newProps} />;
  };
}
