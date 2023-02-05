//this is a summary of all the identifiers that are used to set the behaviour of the table from the domain
export enum AvailableColumnIds {
  "cursor" = "cursor",
  "id" = "id",
  "__typename" = "__typename",
  "name" = "name",
}

export const RelayConnectionKeyword = "Connection";

export enum StarWarsTechnicalTypes {
  Droid = "Droid",
  Human = "Human",
  Starship = "Starship",
}


export type GQLConnection<T extends string> = {
  __typename?: `${T}Connection`;
  /** The edges for each of the character's friends. */
  edges?: unknown[]
  /** The total number of friends */
  totalCount?: number;
};