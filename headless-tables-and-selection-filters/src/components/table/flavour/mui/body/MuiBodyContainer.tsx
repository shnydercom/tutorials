import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const MuiBodyContainer: (props: React.PropsWithChildren<{}>) => JSX.Element = (props) => {
  return <tbody {...props}></tbody>;
};

export class MuiBodyContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps, TrtAPIObj>(
    props?: React.PropsWithChildren<TProps> & {
        rtAPIObj?: TrtAPIObj;
      }
    ): JSX.Element {
    return <MuiBodyContainer {...props} />;
  }
}
