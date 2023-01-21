import React from "react";
import { DefaultComponentCreatorFnsDict } from "./default/DefaultComponentCreatorFnsDict";
import { FlavourContext } from "./FlavourContext";
import { FlavourComponentsDictionary } from "./interfaces";
import { MuiComponentCreatorFnsDictionary } from "./mui/MuiComponentCreatorFnsDict";
import { XRComponentCreatorFnsDict } from "./xr/XRComponentCreatorFnsDict";

export const useFlavour: (
) => FlavourComponentsDictionary = () => {
  const { flavourName } = React.useContext(FlavourContext);
  const componentDict = React.useMemo(() => {
    switch (flavourName) {
      case "default":
        return DefaultComponentCreatorFnsDict;
      case "mui":
        return MuiComponentCreatorFnsDictionary;
      case "xr":
        return XRComponentCreatorFnsDict;
      default:
        return DefaultComponentCreatorFnsDict;
    }
  }, [flavourName]);
  return componentDict;
};
