import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import { FactoryFnForHeaderGroups } from "../../flavourFactoryFunctionTypes";

export const DefaultHeadContainer = (props: React.PropsWithChildren<{}>) => {
  return <thead {...props}></thead>;
};
export class DefaultHeadContainerFactory extends AbstractTablePartFactory {
  generateWidget: FactoryFnForHeaderGroups<any> = ({headerGroups, children}) => {
    const newProps = {children};
    return <DefaultHeadContainer {...newProps} />;
  }
}
