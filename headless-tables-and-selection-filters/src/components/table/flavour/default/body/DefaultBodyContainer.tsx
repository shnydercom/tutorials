import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultBodyContainer: (propsWOChildren: {
  children?: React.ReactNode;
}) => JSX.Element = (propsWOChildren) => {
  return <tbody {...propsWOChildren}></tbody>;
};

export class DefaultBodyContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren, TDataObj>(
    propsWOChildren?: React.PropsWithChildren<TPropsWOChildren> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    return <DefaultBodyContainer {...propsWOChildren} />;
  }
}
