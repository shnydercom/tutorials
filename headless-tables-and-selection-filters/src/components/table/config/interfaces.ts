import { Column } from "react-table";
import { AbstractTablePartFactory } from "../flavour/AbstractTablePartFactory";
import { DefaultTablePartFactoriesType } from "../flavour/default/DefaultTablePartFactories";
import { MuiTablePartFactoriesType } from "../flavour/mui/MuiTablePartFactories";

export type AvailableTableFactories =
  | DefaultTablePartFactoriesType
  | MuiTablePartFactoriesType;

export type AvailableTableLayouts = "simple" | "sorting";

export interface SourceDataToColumnsMapper<TSourceDataElem extends object> {
  (sourceData: TSourceDataElem[] | never[]): Column<TSourceDataElem>[];
}

export interface TableViewerOptions<
  TTableRawData extends object,
  TTableRawArrayElem extends object,
  TSourceDataElem extends object
> {
  rowArrayAccessor: (value: TTableRawData) => Array<TTableRawArrayElem | null | undefined>;
  rawDataToSourceTransformator: (input: TTableRawArrayElem | null | undefined) => TSourceDataElem;
  tablePartFactories: AvailableTableFactories;
  layout: AvailableTableLayouts;
  sourceDataToColumnsMapper: SourceDataToColumnsMapper<TSourceDataElem>;
}

export interface TablePartFactories<
  TOutmostComp extends AbstractTablePartFactory,
  TTableComp extends AbstractTablePartFactory,
  THeadComp extends AbstractTablePartFactory,
  THeaderRowComp extends AbstractTablePartFactory,
  THeaderCellComp extends AbstractTablePartFactory,
  TBodyComp extends AbstractTablePartFactory,
  TRowComp extends AbstractTablePartFactory,
  TCellComp extends AbstractTablePartFactory
> {
  outmostContainer: TOutmostComp;
  table: TTableComp;
  head: THeadComp;
  headerRow: THeaderRowComp;
  headerCell: THeaderCellComp;
  body: TBodyComp;
  row: TRowComp;
  cell: TCellComp;
}
