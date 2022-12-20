import { Column } from "react-table";
import { ComponentCreatorFnsDictionary } from "../flavour/interfaces";

//this is a summary of all the identifiers that are used to set the behaviour, design and data of the table
export type AvailableTableLayouts = "simple" | "sorting" | "expandable";
export type AvailableFlavours = "defaulthtml" | "mui" | "xr";
export enum AvailableColumnIds {
  "cursor" = "cursor",
  "id" = "id",
  "__typename" = "__typename",
  "name" = "name",
}

export interface SourceDataToColumnsMapper<TSourceDataElem extends object> {
  (sourceData: TSourceDataElem[]): Column<TSourceDataElem>[];
}

export interface BatteriesIncludedTableOptions<
  TTableRawData extends object,
  TTableRawArrayElem extends object,
  TSourceDataElem extends object
> {
  rowArrayAccessor: (
    value: TTableRawData
  ) => Array<TTableRawArrayElem | null | undefined>;
  rawDataToSourceTransformator: (
    input: TTableRawArrayElem | null | undefined
  ) => TSourceDataElem;
  compCreatorDict: ComponentCreatorFnsDictionary;
  layout: AvailableTableLayouts;
  sourceDataToColumnsMapper: SourceDataToColumnsMapper<TSourceDataElem>;
}
