import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultOutmostContainer: (props: React.PropsWithChildren<{}>) => JSX.Element = (props) => {
  return <div {...props}></div>;
};

export class DefaultOutmostContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps, TDataObj>(
    props?: React.PropsWithChildren<TProps> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    return <DefaultOutmostContainer {...props} />;
  }
}
