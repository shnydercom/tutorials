import { ComponentCreatorFnsDictionary } from "../interfaces";
import { DefaultHeaderCellCreatorFn } from "./DefaultHeaderCellCreatorFn";
import { DefaultBodyCellCreatorFn } from "./DefaultBodyCellCreatorFn";

export const DefaultComponentCreatorFnsDict: ComponentCreatorFnsDictionary = {
  outmost: (props: React.PropsWithChildren<{}>) => <div {...props}></div>,
  table: (props: React.PropsWithChildren<{}>) => <table className="defaulthtmlstyle" {...props}></table>,
  head: (props: React.PropsWithChildren<{}>) => <thead {...props}></thead>,
  headerRow: (props: React.PropsWithChildren<{}>) => <tr {...props}></tr>,
  headerCell: DefaultHeaderCellCreatorFn,
  body: (props: React.PropsWithChildren<{}>) => <tbody {...props}></tbody>,
  bodyRow: (props: React.PropsWithChildren<{}>) => <tr {...props}></tr>,
  bodyCell: DefaultBodyCellCreatorFn,
};
