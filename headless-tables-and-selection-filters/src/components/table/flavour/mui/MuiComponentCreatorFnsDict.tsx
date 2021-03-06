import { ComponentCreatorFnsDictionary } from "../interfaces";
import MuiTableContainer from "@mui/material/TableContainer";
import MuiTable from "@mui/material/Table";
import MuiTableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { MuiHeaderCellCreatorFn } from "./MuiHeaderCellCreatorFn";
import { MuiBodyCellCreatorFn } from "./MuiBodyCellCreatorFn";

export const MuiComponentCreatorFnsDictionary: ComponentCreatorFnsDictionary = {
  outmost: MuiTableContainer,
  table: MuiTable,
  head: MuiTableHead,
  headerRow: TableRow,
  headerCell: MuiHeaderCellCreatorFn,
  body: TableBody,
  bodyRow: TableRow,
  bodyCell: MuiBodyCellCreatorFn,
} 
