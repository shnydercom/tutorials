import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultHeadContainer = (props: React.PropsWithChildren<{}>) => {
  return <thead {...props}></thead>;
};
export class DefaultHeadContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps , TDataObj >(
    props?: React.PropsWithChildren<TProps> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    return <DefaultHeadContainer {...props} />;
  }
}
