import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTable from "@mui/material/Table";
import { FactoryFnForTableRoot } from "../../flavourFactoryFunctionTypes";

export const MuiTableContainer = (props: React.PropsWithChildren<{}>) => {
  return <MuiTable {...props}></MuiTable>;
};

export class MuiTableContainerFactory extends AbstractTablePartFactory {
  generateWidget: FactoryFnForTableRoot<any> = ({
    getTableProps,
    children,
  }) => {
    const newProps = { ...getTableProps(), children };
    return <MuiTableContainer {...newProps} />;
  };
}
