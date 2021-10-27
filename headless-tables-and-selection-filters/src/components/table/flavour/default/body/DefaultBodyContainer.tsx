import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import { FactoryFnForBody } from "../../flavourFactoryFunctionTypes";

export const DefaultBodyContainer: (props: {
  children?: React.ReactNode;
}) => JSX.Element = (props) => {
  return <tbody {...props}></tbody>;
};

export class DefaultBodyContainerFactory extends AbstractTablePartFactory {
  generateWidget: FactoryFnForBody<any> = ({
    getTableBodyProps,
    rows,
    children,
  }) => {
    const newProps = { ...getTableBodyProps(), children };
    return <DefaultBodyContainer {...newProps} />;
  }
}
