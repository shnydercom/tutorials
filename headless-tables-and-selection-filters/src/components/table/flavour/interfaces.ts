import React from "react";
import { Cell, HeaderGroup } from "react-table";

export interface ContainerComponentsDictionary {
  outmost: React.FC;
  table: React.FC;
  head: React.FC;
  headerRow: React.FC;
  headerCell: HeaderCellRenderer;
  body: React.FC;
  bodyRow: React.FC;
  bodyCell: CellRenderer;
}

export type CellRenderer = React.FC<
  React.PropsWithChildren<{
    cell: Cell<any>;
  }>
>;

export type HeaderCellRenderer = React.FC<
  React.PropsWithChildren<{
    headerGroup: HeaderGroup<any>;
  }>
>;
