import { rawTableDataElemToColumn } from "./rawTableDataElemToColumn";
import { RelaySpecExplorationTableOptions } from "./interfaces";

export function createDefaultRelaySpecExplorationTableOptions<
  TTableRawData extends object,
  TTableRawArrayElem extends object,
  TSourceDataElem extends object
>() {
  const rv: RelaySpecExplorationTableOptions<
    TTableRawData,
    TTableRawArrayElem,
    TSourceDataElem
  > = {
    rowArrayAccessor: defaultRowAccessor,
    rawDataToSourceTransformator: defaultRawDataToSourceTransformator,
    sourceDataToColumnsMapper: rawTableDataElemToColumn,
  };
  return rv;
}

export function defaultRowAccessor<TTableRawData, TArrayElem>(
  value: TTableRawData
): Array<TArrayElem> {
  return recursiveArrayFinder(value);
}

export function defaultRawDataToSourceTransformator<TArrayElem, TRow>(
  input: TArrayElem
): TRow {
  return input as unknown as TRow;
}

/**
 * rather expensive approach to breadth-search into the supplied object tree, looking for an Array and returning it
 * @param baseObj
 * @returns
 */
function recursiveArrayFinder<TInput, TOutput>(
  baseObj: TInput
): Array<TOutput> {
  if (typeof baseObj === "object" && baseObj !== null) {
    for (const key in baseObj) {
      if (Object.prototype.hasOwnProperty.call(baseObj, key)) {
        const element = baseObj[key];
        if (Array.isArray(element)) {
          return element;
        }
      }
    }
    return recursiveArrayFinder(baseObj as unknown as object);
  }
  return [];
}