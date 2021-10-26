import { defaultTablePartFactories } from "../flavour/default/DefaultTablePartFactories";
import { TableViewerOptions } from "./interfaces";

export function createDefaultTableViewerOptions<
  TQueryData,
  TArrayElem,
  TRow
>() {
  const rv: TableViewerOptions<
    TQueryData,
    TArrayElem,
    TRow
  > = {
    rowArrayAccessor: defaultRowAccessor,
    rowTransformation: defaultRowTransformation,
    tablePartFactories: defaultTablePartFactories,
  };
  return rv;
}

export function defaultRowAccessor<TQueryData, TArrayElem>(
  value: TQueryData
): Array<TArrayElem> {
  return recursiveArrayFinder(value);
}

export function defaultRowTransformation<TArrayElem, TRow>(
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
