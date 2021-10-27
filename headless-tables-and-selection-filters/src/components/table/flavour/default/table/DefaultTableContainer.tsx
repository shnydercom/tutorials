import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultTableContainer = (props: React.PropsWithChildren<{}>) => {
  return <table {...props}></table>;
};

export class DefaultTableContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps, TrtAPIObj>(
    props?: React.PropsWithChildren<TProps> & {
      rtAPIObj?: TrtAPIObj;
    }
  ): JSX.Element {
    return <DefaultTableContainer {...props} />;
  }
}
