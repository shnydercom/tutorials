import { Column } from "react-table";

export function isColumn(input: any): input is Column {
  if (!input) return false;
  return Object.prototype.hasOwnProperty.call(input, "Header");
}
