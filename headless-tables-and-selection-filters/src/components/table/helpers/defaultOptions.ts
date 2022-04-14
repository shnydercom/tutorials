import { DefaultComponentCreatorFnsDict } from "../flavour";
import { flattenRelayEdge } from "../functionality/flattenRelayEdge";
import { rawTableDataElemToColumn } from "../functionality/rawTableDataElemToColumn";
import { RelayEdge } from "../functionality/RelaybaseInterfaces";
import { BatteriesIncludedTableOptions } from "./interfaces";

export function createDefaultBatteriesIncludedTableOptions<
  TTableRawData extends object,
  TTableRawArrayElem extends object,
  TSourceDataElem extends object
>() {
  const rv: BatteriesIncludedTableOptions<
    TTableRawData,
    TTableRawArrayElem,
    TSourceDataElem
  > = {
    rowArrayAccessor: defaultRowAccessor,
    rawDataToSourceTransformator: defaultRawDataToSourceTransformator,
    compCreatorDict: DefaultComponentCreatorFnsDict,
    layout: "simple",
    sourceDataToColumnsMapper: rawTableDataElemToColumn,
  };
  return rv;
}

export function defaultRowAccessor<TTableRawData, TArrayElem>(
  value: TTableRawData
): Array<TArrayElem> {
  const connectionEdges = relayConnectionArrayFinder(value) as Array<TArrayElem>;
  if(connectionEdges.length > 0) return connectionEdges;
  return recursiveArrayFinder(value);
}

export function defaultRawDataToSourceTransformator<TArrayElem, TRow>(
  input: TArrayElem
): TRow {
  return input as unknown as TRow;
}


/**
 * rather expensive approach to breadth-search into the supplied object tree, looking for an Array with content and returning it
 * @param baseObj
 * @returns
 */
 function recursiveArrayFinder<TInput, TOutput>(
  baseObj: TInput
): Array<TOutput> {
  const ownObjectProps: string[] = [];
  if (typeof baseObj === "object" && baseObj !== null) {
    //check if any property on the object is an array and return it if found
    for (const key in baseObj) {
      if (Object.prototype.hasOwnProperty.call(baseObj, key)) {
        const element = baseObj[key];
        if (Array.isArray(element)) {
          return element;
        }
        if(typeof element === "object" && element !== null){
          ownObjectProps.push(key);
        }
      }
    }
    //iterate over sub-properties that are also objects
    for (let idx = 0; idx < ownObjectProps.length; idx++) {
      const subObjKey = ownObjectProps[idx]!;
      const subArrays = recursiveArrayFinder((baseObj as {[s: string]: any})[subObjKey]);
      if(subArrays.length !== 0){
        return subArrays as unknown[] as TOutput[];
      }
    }
    
  }
  return [];
}

function relayConnectionArrayFinder<TInput, TOutput>(
  baseObj: TInput
): Array<TOutput> {
  if (typeof baseObj === "object" && baseObj !== null) {
    //check if any direct property on the object is a relay-connection and return it if found
    for (const key in baseObj) {
      if (Object.prototype.hasOwnProperty.call(baseObj, key)) {
        if(key.endsWith("Connection")){
          const element = baseObj[key];
          if(typeof element === "object" && element !== null && Object.hasOwnProperty.call(element, "edges")){
            const edges = (element as any)["edges"] as Array<RelayEdge>;
            const flattenedEdges = edges.map(edge => flattenRelayEdge(edge))
            if(flattenedEdges.length > 0) return flattenedEdges as unknown[] as Array<TOutput>;
          }
        }
      }
    }
  }
  return [] as Array<TOutput>;
}