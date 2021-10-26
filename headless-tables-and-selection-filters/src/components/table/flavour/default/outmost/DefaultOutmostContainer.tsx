import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultOutmostContainer: (propsWOChildren: {
  children?: React.ReactNode;
}) => JSX.Element = (propsWOChildren) => {
  return <div {...propsWOChildren}></div>;
};

export class DefaultOutmostContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren, TDataObj>(
    propsWOChildren?: TPropsWOChildren & {
      children?: React.ReactNode;
    },
    dataObj?: TDataObj
  ): JSX.Element {
    return <DefaultOutmostContainer {...propsWOChildren} />;
  }
}
