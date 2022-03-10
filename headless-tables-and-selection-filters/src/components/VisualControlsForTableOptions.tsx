import { MenuItem, Select } from "@mui/material";
import { Episode } from "../generated/graphql";
import { AvailableFlavours, AvailableTableLayouts } from "./table/helpers/interfaces";

export interface TableControlOptionsAsJSON {
  layout: AvailableTableLayouts;
  flavour: AvailableFlavours;
  episodeToQuery: Episode
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
        <MenuItem value={"defaulthtml"}>Default HTML flavour</MenuItem>
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
      <Select
        labelId="select-episode-label"
        id="select-episode"
        value={props.controlOptions.episodeToQuery}
        label="Choose the original Star Wars Episode to query"
        onChange={(e) => {
          const returnedOptions = {
            ...props.controlOptions,
            episodeToQuery: e.target.value as Episode,
          };
          props.handleChange(returnedOptions);
        }}
      >
        <MenuItem value={Episode.Newhope}>
          Star Wars Episode IV: A New Hope, released in 1977.
        </MenuItem>
        <MenuItem value={Episode.Empire}>
          Star Wars Episode V: The Empire Strikes Back, released in 1980.
        </MenuItem>
        <MenuItem value={Episode.Jedi}>
          Star Wars Episode VI: Return of the Jedi, released in 1983.
        </MenuItem>
      </Select>

    </div>
  );
};
