import { Column } from "react-table";

export function isColumn(input: any): input is Column {
  if (!input) return false;
  return Object.prototype.hasOwnProperty.call(input, "Header");
}

export function isString(input: any): input is string {
  if(!input) return false;
  return (typeof input === 'string' || input instanceof String)
}
