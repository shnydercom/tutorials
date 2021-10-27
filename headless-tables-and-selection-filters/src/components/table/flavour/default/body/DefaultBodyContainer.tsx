import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultBodyContainer: (props: {
  children?: React.ReactNode;
}) => JSX.Element = (props) => {
  return <tbody {...props}></tbody>;
};

export class DefaultBodyContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps, TDataObj>(
    props?: React.PropsWithChildren<TProps> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    return <DefaultBodyContainer {...props} />;
  }
}
