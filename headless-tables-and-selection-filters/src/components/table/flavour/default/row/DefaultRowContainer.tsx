import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import { FactoryFnForRow } from "../../flavourFactoryFunctionTypes";

export const DefaultRowContainer = (props: React.PropsWithChildren<{}>) => {
  return <tr {...props}></tr>;
};

export class DefaultRowContainerFactory extends AbstractTablePartFactory {
  generateWidget: FactoryFnForRow<any> = ({ row, children }) => {
    const newProps = { children };
    return <DefaultRowContainer {...newProps} />;
  }
}
