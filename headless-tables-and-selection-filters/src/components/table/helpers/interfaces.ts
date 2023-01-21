import { Column } from "react-table";

//this is a summary of all the identifiers that are used to set the behaviour, design and data of the table

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
  sourceDataToColumnsMapper: SourceDataToColumnsMapper<TSourceDataElem>;
}
