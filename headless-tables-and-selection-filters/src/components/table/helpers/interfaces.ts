import { Column } from "react-table";
import { ContainerComponentsDictionary } from "../flavour/interfaces";

export type AvailableTableLayouts = "simple" | "sorting" | "expandable";
export type AvailableFlavours = "defaulthtml" | "mui";

export interface SourceDataToColumnsMapper<TSourceDataElem extends object> {
  (sourceData: TSourceDataElem[]): Column<TSourceDataElem>[];
}

export interface BatteriesIncludedTableOptions<
  TTableRawData extends object,
  TTableRawArrayElem extends object,
  TSourceDataElem extends object
> {
  rowArrayAccessor: (value: TTableRawData) => Array<TTableRawArrayElem | null | undefined>;
  rawDataToSourceTransformator: (input: TTableRawArrayElem | null | undefined) => TSourceDataElem;
  containerCompDict: ContainerComponentsDictionary;
  layout: AvailableTableLayouts;
  sourceDataToColumnsMapper: SourceDataToColumnsMapper<TSourceDataElem>;
}
