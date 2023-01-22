import React from "react";
import { TableSubComponentDict } from "./interfaces";

export const TableSubComponentContext = React.createContext<TableSubComponentDict>({
  SubComponent: () => <div className="subcomponent-placeholder">{`subcomponent placeholder`}</div>
});

export const TableSubComponentContextProvider: React.FC<
  React.PropsWithChildren<TableSubComponentDict>
> = ({ SubComponent, children }) => {
  return (
    <TableSubComponentContext.Provider value={{ SubComponent }}>
      {children}
    </TableSubComponentContext.Provider>
  );
};
