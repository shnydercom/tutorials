import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import { FactoryFnForHeaderGroup } from "../../flavourFactoryFunctionTypes";
import { DefaultRowContainer } from "./DefaultRowContainer";

export class DefaultHeaderRowContainerFactory extends AbstractTablePartFactory {
  generateWidget: FactoryFnForHeaderGroup<any> = ({
    headerGroup,
    children,
  }) => {
    const newProps = {
      ...headerGroup.getHeaderGroupProps(),
      children,
    };
    return <DefaultRowContainer {...newProps} />;
  };
}
