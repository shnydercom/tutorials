import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultHeadContainer = (propsWOChildren: React.PropsWithChildren<{}>) => {
  return <thead {...propsWOChildren}></thead>;
};
export class DefaultHeadContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren , TDataObj >(
    propsWOChildren?: React.PropsWithChildren<TPropsWOChildren> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    return <DefaultHeadContainer {...propsWOChildren} />;
  }
}
