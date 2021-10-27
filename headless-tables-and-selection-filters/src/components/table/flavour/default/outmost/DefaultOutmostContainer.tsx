import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultOutmostContainer: (props: React.PropsWithChildren<{}>) => JSX.Element = (props) => {
  return <div {...props}></div>;
};

export class DefaultOutmostContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps, TrtAPIObj>(
    props?: React.PropsWithChildren<TProps> & {
      rtAPIObj?: TrtAPIObj;
    }
  ): JSX.Element {
    return <DefaultOutmostContainer {...props} />;
  }
}
