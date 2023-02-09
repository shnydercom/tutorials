import { Column } from "react-table";
import { GQLConnection, RelayConnectionKeyword } from "../domain-information";

export function isColumn(input: any): input is Column {
  if (!input) return false;
  return Object.prototype.hasOwnProperty.call(input, "Header");
}

export function isString(input: any): input is string {
  if(!input) return false;
  return (typeof input === 'string' || input instanceof String)
}

export function isConnection<T extends string>(input: any): input is GQLConnection<T> {
  if(!input) return false;
  if(typeof input !== 'object')return false;
  return (input?.__typeName as string).endsWith(RelayConnectionKeyword)
}