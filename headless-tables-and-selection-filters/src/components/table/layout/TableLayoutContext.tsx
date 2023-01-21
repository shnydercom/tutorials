import React from "react";
import { TableLayoutContextValue } from "./interfaces";

export const TableLayoutContext = React.createContext<TableLayoutContextValue>({
  tableLayoutName: "simple",
});

export const TableLayoutContextProvider: React.FC<
  React.PropsWithChildren<TableLayoutContextValue>
> = ({ tableLayoutName, children }) => {
  return (
    <TableLayoutContext.Provider value={{ tableLayoutName }}>
      {children}
    </TableLayoutContext.Provider>
  );
};
