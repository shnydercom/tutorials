import { MenuItem, Select } from "@mui/material";
import { AvailableTableLayouts } from "./table/helpers/interfaces";

type AvailableFlavours = "default" | "mui";

export interface TableControlOptionsAsJSON {
  layout: AvailableTableLayouts;
  flavour: AvailableFlavours;
}

/**
 * this is a fully, externally controlled component for choosing the options of our table
 * @returns
 */
export const VisualControlsForTableOptions = (props: {
  controlOptions: TableControlOptionsAsJSON;
  handleChange: (v: TableControlOptionsAsJSON) => void;
}) => {
  return (
    <div>
      <Select
        labelId="select-flavour-label"
        id="select-flavour"
        value={props.controlOptions.flavour}
        label="Choose which visual components should be used"
        onChange={(e) => {
          const returnedOptions = {
            ...props.controlOptions,
            flavour: e.target.value as AvailableFlavours,
          };
          props.handleChange(returnedOptions);
        }}
      >
        <MenuItem value={"default"}>Default HTML flavour</MenuItem>
        <MenuItem value={"mui"}>Material UI flavour</MenuItem>
      </Select>
      <Select
        labelId="select-layout-label"
        id="select-layout"
        value={props.controlOptions.layout}
        label="Choose the table layout and UX"
        onChange={(e) => {
          const returnedOptions = {
            ...props.controlOptions,
            layout: e.target.value as AvailableTableLayouts,
          };
          props.handleChange(returnedOptions);
        }}
      >
        <MenuItem value={"simple"}>
          A simple table that's not interactive
        </MenuItem>
        <MenuItem value={"sorting"}>
          A table that lets you sort by clicking the column headers
        </MenuItem>
        <MenuItem value={"expandable"}>
          A table that lets you open and close sub-elements
        </MenuItem>
      </Select>
    </div>
  );
};
