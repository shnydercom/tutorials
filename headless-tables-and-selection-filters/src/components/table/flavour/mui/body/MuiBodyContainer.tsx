import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const MuiBodyContainer: (props: React.PropsWithChildren<{}>) => JSX.Element = (props) => {
  return <tbody {...props}></tbody>;
};

export class MuiBodyContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps, TDataObj>(
    props?: React.PropsWithChildren<TProps> & {
        dataObj?: TDataObj;
      }
    ): JSX.Element {
    return <MuiBodyContainer {...props} />;
  }
}
