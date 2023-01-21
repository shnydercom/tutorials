import { ExpandableTableLayout } from "./ExpandableTableLayout";
import { SimpleTableLayout } from "./SimpleTableLayout";
import { SortingTableLayout } from "./SortingTableLayout";

export interface TableLayoutContextValue {
  tableLayoutName: TableLayoutName;
}

export interface TableLayoutComponent {
    TableLayout: TableLayoutComponentTypes
}

export type TableLayoutName = "simple" | "sorting" | "expandable";

export type TableLayoutComponentTypes =
  | typeof ExpandableTableLayout
  | typeof SimpleTableLayout
  | typeof SortingTableLayout;
