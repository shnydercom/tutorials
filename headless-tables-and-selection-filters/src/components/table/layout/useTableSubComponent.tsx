import React from "react";
import { TableSubComponentDict } from "./interfaces";
import { TableSubComponentContext } from "./TableSubComponentContext";

export const useTableSubComponent: <
  T extends object = {}
>() => TableSubComponentDict<T> = () => {
  const { SubComponent } = React.useContext(TableSubComponentContext);
  const subComponentDict = React.useMemo(() => {
    return {
      SubComponent,
    };
  }, [SubComponent]);
  return subComponentDict;
};
