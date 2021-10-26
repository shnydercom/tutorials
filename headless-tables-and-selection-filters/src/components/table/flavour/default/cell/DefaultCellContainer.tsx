import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultCellContainer = (propsWOChildren = {}) => {
  return <td {...propsWOChildren}></td>;
};
export class DefaultCellContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren , TDataObj >(
    propsWOChildren?: TPropsWOChildren,
    dataObj?: TDataObj
  ): JSX.Element {
    return <DefaultCellContainer {...propsWOChildren} />;
  }
}
