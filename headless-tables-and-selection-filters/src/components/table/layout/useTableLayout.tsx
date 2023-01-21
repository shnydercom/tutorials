import React from "react";
import { ExpandableTableLayout } from "./ExpandableTableLayout";
import { TableLayoutComponent } from "./interfaces";
import { SimpleTableLayout } from "./SimpleTableLayout";
import { SortingTableLayout } from "./SortingTableLayout";
import { TableLayoutContext } from "./TableLayoutContext";

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
