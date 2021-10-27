import React from "react";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import {
  FactoryFnForHeaderGroup,
} from "../../flavourFactoryFunctionTypes";
import { DefaultCellContainer } from "./DefaultCellContainer";

export const DefaultSortingCellContainer = ({
  isSorted,
  isSortedDesc,
  children,
  ...handDown
}: React.PropsWithChildren<{
  isSorted: boolean;
  isSortedDesc: boolean;
}>): JSX.Element => {
  return (
    <td {...handDown}>
      {children}
      <span>{isSorted ? (isSortedDesc ? " 🔽" : " 🔼") : ""}</span>
    </td>
  );
};
export class DefaultHeaderCellContainerFactory extends AbstractTablePartFactory {
  generateWidget: FactoryFnForHeaderGroup<any> = ({
    headerGroup,
    children,
  }) => {
    const { isSorted, isSortedDesc } = headerGroup;
    if (headerGroup.canSort) {
      const newProps = {
        ...headerGroup.getHeaderProps(headerGroup.getSortByToggleProps()),
        isSorted: !!isSorted,
        isSortedDesc: !!isSortedDesc,
        children,
      };
      return <DefaultSortingCellContainer {...newProps} />;
    }
    const newProps = {
      ...headerGroup.getHeaderProps(),
      children,
    };
    return <DefaultCellContainer {...newProps} />;
  };
}
