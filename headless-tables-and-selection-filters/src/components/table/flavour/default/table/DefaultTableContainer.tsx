import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultTableContainer = (propsWOChildren: React.PropsWithChildren<{}>) => {
  return <table {...propsWOChildren}></table>;
};

export class DefaultTableContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren, TDataObj>(
    propsWOChildren?: React.PropsWithChildren<TPropsWOChildren> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    return <DefaultTableContainer {...propsWOChildren} />;
  }
}
