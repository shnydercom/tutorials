import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const MuiBodyContainer: (propsWOChildren: React.PropsWithChildren<{}>) => JSX.Element = (propsWOChildren) => {
  return <tbody {...propsWOChildren}></tbody>;
};

export class MuiBodyContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren, TDataObj>(
    propsWOChildren?: React.PropsWithChildren<TPropsWOChildren> & {
        dataObj?: TDataObj;
      }
    ): JSX.Element {
    return <MuiBodyContainer {...propsWOChildren} />;
  }
}
