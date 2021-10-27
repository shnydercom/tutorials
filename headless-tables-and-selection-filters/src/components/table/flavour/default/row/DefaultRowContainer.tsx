import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultRowContainer = (props: React.PropsWithChildren<{}>) => {
  return <tr {...props}></tr>;
};

export class DefaultRowContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps , TrtAPIObj >(
    props?: React.PropsWithChildren<TProps> & {
      rtAPIObj?: TrtAPIObj;
    }
  ): JSX.Element {
    return <DefaultRowContainer {...props} />;
  }
}
