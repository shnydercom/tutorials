import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import { FactoryFnForBody } from "../../flavourFactoryFunctionTypes";

export const MuiBodyContainer: (
  props: React.PropsWithChildren<{}>
) => JSX.Element = (props) => {
  return <tbody {...props}></tbody>;
};

export class MuiBodyContainerFactory extends AbstractTablePartFactory {
  generateWidget: FactoryFnForBody<any> = ({
    getTableBodyProps,
    rows,
    children,
  }) => {
    const newProps = { ...getTableBodyProps(), children };
    return <MuiBodyContainer {...newProps} />;
  };
}
