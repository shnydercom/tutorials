import { FlavourComponentsDictionary } from "../interfaces";
import { DefaultHeaderCellCreatorFn } from "./DefaultHeaderCellCreatorFn";
import { DefaultBodyCellCreatorFn } from "./DefaultBodyCellCreatorFn";

export const DefaultComponentCreatorFnsDict: FlavourComponentsDictionary = {
  Outmost: (props: React.PropsWithChildren<{}>) => <div {...props}></div>,
  Table: (props: React.PropsWithChildren<{}>) => <table className="defaulthtmlstyle" {...props}></table>,
  Head: (props: React.PropsWithChildren<{}>) => <thead {...props}></thead>,
  HeaderRow: (props: React.PropsWithChildren<{}>) => <tr {...props}></tr>,
  HeaderCell: DefaultHeaderCellCreatorFn,
  Body: (props: React.PropsWithChildren<{}>) => <tbody {...props}></tbody>,
  BodyRow: (props: React.PropsWithChildren<{}>) => <tr {...props}></tr>,
  BodyCell: DefaultBodyCellCreatorFn,
};
