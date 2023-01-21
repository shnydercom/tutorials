import { Column } from "react-table";


export interface SourceDataToColumnsMapper<TSourceDataElem extends object> {
  (sourceData: TSourceDataElem[]): Column<TSourceDataElem>[];
}

export interface RelaySpecExplorationTableOptions<
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
