import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import { FactoryFnForTableRoot } from "../../flavourFactoryFunctionTypes";

export const DefaultTableContainer = (props: React.PropsWithChildren<{}>) => {
  return <table {...props}></table>;
};

export class DefaultTableContainerFactory extends AbstractTablePartFactory {
  generateWidget: FactoryFnForTableRoot<any> = ({
    getTableProps,
    children,
  }) => {
    const newProps = { ...getTableProps(), children };
    return <DefaultTableContainer {...newProps} />;
  }
}
