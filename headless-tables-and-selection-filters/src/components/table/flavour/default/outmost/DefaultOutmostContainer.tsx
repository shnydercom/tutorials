import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import { FactoryFnForOutmost } from "../../flavourFactoryFunctionTypes";

export const DefaultOutmostContainer: (props: React.PropsWithChildren<{}>) => JSX.Element = (props) => {
  return <div {...props}></div>;
};

export class DefaultOutmostContainerFactory extends AbstractTablePartFactory {
  generateWidget: FactoryFnForOutmost = (props) => {
    return <DefaultOutmostContainer {...props} />;
  }
}
