import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultTableContainer = (propsWOChildren = {}) => {
  return <table {...propsWOChildren}></table>;
};

export class DefaultTableContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren, TDataObj>(
    propsWOChildren?: TPropsWOChildren,
    dataObj?: TDataObj
  ): JSX.Element {
    return <DefaultTableContainer {...propsWOChildren} />;
  }
}
