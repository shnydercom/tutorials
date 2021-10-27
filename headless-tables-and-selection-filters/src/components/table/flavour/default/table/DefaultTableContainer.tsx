import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultTableContainer = (props: React.PropsWithChildren<{}>) => {
  return <table {...props}></table>;
};

export class DefaultTableContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps, TDataObj>(
    props?: React.PropsWithChildren<TProps> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    return <DefaultTableContainer {...props} />;
  }
}
