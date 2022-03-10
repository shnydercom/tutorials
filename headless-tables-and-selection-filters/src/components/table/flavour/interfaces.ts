import React from "react";
import { CellProps, HeaderProps } from "react-table";
import { AvailableFlavours } from "../helpers/interfaces";

export interface ContainerComponentsDictionary {
  flavour: AvailableFlavours;
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
