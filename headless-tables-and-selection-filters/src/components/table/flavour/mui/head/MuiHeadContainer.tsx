import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import MuiTableHead from "@mui/material/TableHead";
import { FactoryFnForHeaderGroups } from "../../flavourFactoryFunctionTypes";

export const MuiHeadContainer = (props: React.PropsWithChildren<{}>) => {
  return <MuiTableHead {...props}></MuiTableHead>;
};
export class MuiHeadContainerFactory extends AbstractTablePartFactory {
  generateWidget: FactoryFnForHeaderGroups<any> = ({
    headerGroups,
    children,
  }) => {
    const newProps = { children };
    return <MuiHeadContainer {...newProps} />;
  };
}
