import React from "react";
import { Cell, CellProps, HeaderGroup, HeaderProps } from "react-table";

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

export type CellRenderer = React.FC<React.PropsWithChildren<CellProps<any>>>;

export type HeaderCellRenderer = React.FC<
  React.PropsWithChildren<HeaderProps<any>>
>;
