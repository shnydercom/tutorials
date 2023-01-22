import { SimpleTableLayout } from "./whole-table/SimpleTableLayout";
import { ExpandableTableLayout } from "./whole-table/ExpandableTableLayout";
import { SortingTableLayout } from "./whole-table/SortingTableLayout";
import { Row } from "react-table";

export interface TableLayoutContextValue {
  tableLayoutName: TableLayoutName;
}

export interface TableLayoutComponent {
  TableLayout: TableLayoutComponentTypes;
}

export interface TableSubComponentDict<T extends object = {}> {
  SubComponent: TableSubComponentType<T>;
}

export type TableLayoutName = "simple" | "sorting" | "expandable";

export interface TableSubComponentProps<T extends object = {}> {
  row: Row<T>;
}

export type TableSubComponentType<T extends object = {}> = <
  TProps extends TableSubComponentProps<T>
>(
  props: TProps
) => JSX.Element;

export type TableLayoutComponentTypes =
  | typeof ExpandableTableLayout
  | typeof SimpleTableLayout
  | typeof SortingTableLayout;
