import React from "react";
import { isColumn } from "../../../functionality/typeGuards";
import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";

export const DefaultCellContainer = (
  propsWOChildren: React.PropsWithChildren<{}>
) => {
  return <td {...propsWOChildren}></td>;
};

export const DefaultSortingCellContainer = (
  propsWOChildren: React.PropsWithChildren<{}>,
  isSorted: boolean,
  isSortedDesc: boolean
) => {
  return (
    <td {...propsWOChildren}>
      {propsWOChildren.children}
      <span>{isSorted ? (isSortedDesc ? " 🔽" : " 🔼") : ""}</span>
    </td>
  );
};
export class DefaultCellContainerFactory extends AbstractTablePartFactory {
  generateReactWidget<TPropsWOChildren, TDataObj>(
    propsWOChildren?: React.PropsWithChildren<TPropsWOChildren> & {
      dataObj?: TDataObj;
    }
  ): JSX.Element {
    const handDown = { ...propsWOChildren };
    if (handDown.dataObj) delete handDown.dataObj;
    if (isColumn(propsWOChildren?.dataObj)) {
      return DefaultSortingCellContainer(
        { ...handDown },
        (propsWOChildren?.dataObj as any).isSorted, //TODO: fix any
        (propsWOChildren?.dataObj as any).isSortedDesc
      );
    }
    return <DefaultCellContainer {...handDown} />;
  }
}
