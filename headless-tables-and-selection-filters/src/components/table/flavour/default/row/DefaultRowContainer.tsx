import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultRowContainer = (propsWOChildren = {}) => {
  return <tr {...propsWOChildren}></tr>;
};

export class DefaultRowContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren , TDataObj >(
    propsWOChildren?: TPropsWOChildren,
    dataObj?: TDataObj
  ): JSX.Element {
    return <DefaultRowContainer {...propsWOChildren} />;
  }
}
