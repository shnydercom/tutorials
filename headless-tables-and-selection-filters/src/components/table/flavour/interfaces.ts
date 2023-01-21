import React from "react";
import { CellProps, HeaderProps } from "react-table";

export interface FlavourComponentsDictionary {
  Outmost: React.FC;
  Table: React.FC;
  Head: React.FC;
  HeaderRow: React.FC;
  HeaderCell: HeaderCellRenderer;
  Body: React.FC;
  BodyRow: React.FC;
  BodyCell: CellRenderer;
}

export interface FlavourContextValue {
  flavourName: FlavourName;
}

export type FlavourName = "default" | "mui" | "xr";

export type CellRenderer = React.FC<React.PropsWithChildren<CellProps<any>>>;

export type HeaderCellRenderer = React.FC<
  React.PropsWithChildren<HeaderProps<any>>
>;
