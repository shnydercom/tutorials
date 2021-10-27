import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultRowContainer = (props: React.PropsWithChildren<{}>) => {
  return <tr {...props}></tr>;
};

export class DefaultRowContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps , TDataObj >(
    props?: React.PropsWithChildren<TProps> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    return <DefaultRowContainer {...props} />;
  }
}
