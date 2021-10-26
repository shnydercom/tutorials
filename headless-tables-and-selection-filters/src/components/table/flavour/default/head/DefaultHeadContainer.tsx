import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultHeadContainer = (propsWOChildren = {}) => {
  return <thead {...propsWOChildren}></thead>;
};
export class DefaultHeadContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren , TDataObj >(
    propsWOChildren?: TPropsWOChildren,
    dataObj?: TDataObj
  ): JSX.Element {
    return <DefaultHeadContainer {...propsWOChildren} />;
  }
}
