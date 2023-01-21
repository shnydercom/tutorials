import React from "react";
import { FlavourContextValue } from "./interfaces";

export const FlavourContext = React.createContext<FlavourContextValue>({
  flavourName: "default",
});

export const FlavourContextProvider: React.FC<
  React.PropsWithChildren<FlavourContextValue>
> = ({ flavourName, children }) => {
  return (
    <FlavourContext.Provider value={{ flavourName }}>
      {children}
    </FlavourContext.Provider>
  );
};
