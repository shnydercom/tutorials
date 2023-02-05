import { Starship } from "../../../generated/graphql";

export function isStarship(input: unknown): input is Starship {
  if (!input) return false;
  if (Object.prototype.hasOwnProperty.call(input, "__typename")) {
    return (input as { "__typename": string}).__typename === "Starship";
  }
  return false;
}
