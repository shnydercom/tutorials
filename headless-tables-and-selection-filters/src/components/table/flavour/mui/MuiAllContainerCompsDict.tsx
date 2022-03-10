import { ContainerComponentsDictionary } from "../interfaces";
import MuiTableContainer from "@mui/material/TableContainer";
import MuiTable from "@mui/material/Table";
import MuiTableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { MuiHeaderCellContainer } from "./MuiHeaderCellContainer";
import { MuiBodyCellContainer } from "./MuiBodyCellContainer";

export const MuiAllContainerCompsDict: ContainerComponentsDictionary = {
  flavour: "mui",
  outmost: MuiTableContainer,
  table: MuiTable,
  head: MuiTableHead,
  headerRow: TableRow,
  headerCell: MuiHeaderCellContainer,
  body: TableBody,
  bodyRow: TableRow,
  bodyCell: MuiBodyCellContainer,
} 
