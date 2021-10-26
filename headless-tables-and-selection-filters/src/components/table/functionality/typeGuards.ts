import { Column } from "react-table";

export function isColumn(input: any): input is Column {
  if (!input) return false;
  if (Object.prototype.hasOwnProperty.call(input, "Header")) return true;
  return false;
}
