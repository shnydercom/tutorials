import React from "react";
import { TableLayoutComponent } from "./interfaces";
import { SimpleTableLayout } from "./whole-table/SimpleTableLayout";
import { TableLayoutContext } from "./TableLayoutContext";
import { SortingTableLayout } from "./whole-table/SortingTableLayout";
import { ExpandableTableLayout } from "./whole-table/ExpandableTableLayout";

export const useTableLayout: () => TableLayoutComponent = () => {
  const { tableLayoutName } = React.useContext(TableLayoutContext);
  const componentDict = React.useMemo(() => {
    switch (tableLayoutName) {
      case "simple":
        return { TableLayout: SimpleTableLayout };
      case "sorting":
        return { TableLayout: SortingTableLayout };
      case "expandable":
        return { TableLayout: ExpandableTableLayout };
      default:
        return { TableLayout: SimpleTableLayout };
    }
  }, [tableLayoutName]);
  return componentDict;
};
