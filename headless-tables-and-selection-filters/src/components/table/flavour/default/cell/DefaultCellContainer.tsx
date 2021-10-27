import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import { FactoryFnForCell } from "../../flavourFactoryFunctionTypes";

export const DefaultCellContainer = (
  props: React.PropsWithChildren<{}>
) => {
  return <td {...props}></td>;
};

export class DefaultCellContainerFactory extends AbstractTablePartFactory {
  generateWidget: FactoryFnForCell<any> = ({ cell, children }) => {
    const newProps = { ...cell.getCellProps(), children };
    return <DefaultCellContainer {...newProps} />;
  }
}
