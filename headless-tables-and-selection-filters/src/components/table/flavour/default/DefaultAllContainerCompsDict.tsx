import { ContainerComponentsDictionary } from "../interfaces";
import { DefaultHeaderCellContainer } from "./DefaultHeaderCellContainer";
import { DefaultBodyCellContainer } from "./DefaultBodyCellContainer";

export const DefaultAllContainerCompsDict: ContainerComponentsDictionary = {
  flavour: "defaulthtml",
  outmost: (props: React.PropsWithChildren<{}>) => <div {...props}></div>,
  table: (props: React.PropsWithChildren<{}>) => <table {...props}></table>,
  head: (props: React.PropsWithChildren<{}>) => <thead {...props}></thead>,
  headerRow: (props: React.PropsWithChildren<{}>) => <tr {...props}></tr>,
  headerCell: DefaultHeaderCellContainer,
  body: (props: React.PropsWithChildren<{}>) => <tbody {...props}></tbody>,
  bodyRow: (props: React.PropsWithChildren<{}>) => <tr {...props}></tr>,
  bodyCell: DefaultBodyCellContainer,
};
