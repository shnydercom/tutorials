import React from "react";
import { Column, UseSortByColumnProps } from "react-table";
import { isColumn } from "../../../functionality/typeGuards";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultCellContainer = (
  props: React.PropsWithChildren<{}>
) => {
  return <td {...props}></td>;
};

export const DefaultSortingCellContainer = (
  props: React.PropsWithChildren<{}>,
  isSorted: boolean,
  isSortedDesc: boolean
) => {
  return (
    <td {...props}>
      {props.children}
      <span>{isSorted ? (isSortedDesc ? " 🔽" : " 🔼") : ""}</span>
    </td>
  );
};
export class DefaultCellContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TProps, TrtAPIObj>(
    props: React.PropsWithChildren<TProps> & {
      rtAPIObj?: TrtAPIObj;
    }
  ): JSX.Element {
    const handDown = { ...props };
    if (handDown.rtAPIObj) delete handDown.rtAPIObj;
    if (isColumn(props?.rtAPIObj)) {
      return DefaultSortingCellContainer(
        { ...handDown },
        (props?.rtAPIObj as any).isSorted, //TODO: fix any
        (props?.rtAPIObj as any).isSortedDesc
      );
    }
    return <DefaultCellContainer {...handDown} />;
  }
}
