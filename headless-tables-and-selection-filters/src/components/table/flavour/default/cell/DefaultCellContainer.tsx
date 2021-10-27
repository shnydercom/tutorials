import React from "react";
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
  generateReactWidget<TProps, TDataObj>(
    props?: React.PropsWithChildren<TProps> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    const handDown = { ...props };
    if (handDown.dataObj) delete handDown.dataObj;
    if (isColumn(props?.dataObj)) {
      return DefaultSortingCellContainer(
        { ...handDown },
        (props?.dataObj as any).isSorted, //TODO: fix any
        (props?.dataObj as any).isSortedDesc
      );
    }
    return <DefaultCellContainer {...handDown} />;
  }
}
