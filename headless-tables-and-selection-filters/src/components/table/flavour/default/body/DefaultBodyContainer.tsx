import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultBodyContainer: (props: {
  children?: React.ReactNode;
}) => JSX.Element = (props) => {
  return <tbody {...props}></tbody>;
};

export class DefaultBodyContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps, TrtAPIObj>(
    props?: React.PropsWithChildren<TProps> & {
      rtAPIObj?: TrtAPIObj;
    }
  ): JSX.Element {
    return <DefaultBodyContainer {...props} />;
  }
}
