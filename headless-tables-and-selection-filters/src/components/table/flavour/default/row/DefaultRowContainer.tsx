import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultRowContainer = (propsWOChildren: React.PropsWithChildren<{}>) => {
  return <tr {...propsWOChildren}></tr>;
};

export class DefaultRowContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren , TDataObj >(
    propsWOChildren?: React.PropsWithChildren<TPropsWOChildren> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    return <DefaultRowContainer {...propsWOChildren} />;
  }
}
