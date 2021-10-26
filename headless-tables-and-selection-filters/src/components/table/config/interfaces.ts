import { AbstractTablePartFactory } from "../flavour/AbstractTablePartFactory";
import { DefaultTablePartFactoriesType } from "../flavour/default/DefaultTablePartFactories";
import { MuiTablePartFactoriesType } from "../flavour/mui/MuiTablePartFactories";

export type AvailableTableFactories =
  | DefaultTablePartFactoriesType
  | MuiTablePartFactoriesType;

export interface TableViewerOptions<TQueryData, TArrayElem, TRow> {
  rowArrayAccessor: (value: TQueryData) => Array<TArrayElem>;
  rowTransformation: (input: TArrayElem) => TRow;
  tablePartFactories: AvailableTableFactories;
}

export interface TablePartFactories<
  TOutmostComp extends AbstractTablePartFactory,
  TTableComp extends AbstractTablePartFactory,
  THeadComp extends AbstractTablePartFactory,
  TBodyComp extends AbstractTablePartFactory,
  TRowComp extends AbstractTablePartFactory,
  TCellComp extends AbstractTablePartFactory
> {
  outmostContainer: TOutmostComp;
  table: TTableComp;
  head: THeadComp;
  body: TBodyComp;
  row: TRowComp;
  cell: TCellComp;
}
