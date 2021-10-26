import React from "react";
import { Column, useTable } from "react-table";
import { AvailableTableFactories } from "../config/interfaces";

export type SimpleTableLayoutProps<TDataObj extends object> = {
  columns: ReadonlyArray<Column<TDataObj>>;
  data: readonly TDataObj[];
  factories: AvailableTableFactories;
};

export const SimpleTableLayout: <TDataObj extends object>(
  props: SimpleTableLayoutProps<TDataObj>
) => JSX.Element = <TDataObj extends object>(
  props: SimpleTableLayoutProps<TDataObj>
) => {
  const { columns, data } = props;
  const { getTableProps, headerGroups, rows, prepareRow } = useTable<TDataObj>({
    columns,
    data,
  });
  const Outmost = props.factories.outmostContainer.generateReactWidget;
  return (
    <>
      <Outmost>test</Outmost>
    </>
  );
};
