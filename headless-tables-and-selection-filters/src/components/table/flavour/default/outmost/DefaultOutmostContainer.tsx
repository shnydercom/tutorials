import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultOutmostContainer: (propsWOChildren: React.PropsWithChildren<{}>) => JSX.Element = (propsWOChildren) => {
  return <div {...propsWOChildren}></div>;
};

export class DefaultOutmostContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren, TDataObj>(
    propsWOChildren?: React.PropsWithChildren<TPropsWOChildren> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    return <DefaultOutmostContainer {...propsWOChildren} />;
  }
}
