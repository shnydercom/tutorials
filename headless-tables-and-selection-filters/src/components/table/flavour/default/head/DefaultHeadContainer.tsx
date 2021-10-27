import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultHeadContainer = (props: React.PropsWithChildren<{}>) => {
  return <thead {...props}></thead>;
};
export class DefaultHeadContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps , TrtAPIObj >(
    props?: React.PropsWithChildren<TProps> & {
      rtAPIObj?: TrtAPIObj;
    }
  ): JSX.Element {
    return <DefaultHeadContainer {...props} />;
  }
}
