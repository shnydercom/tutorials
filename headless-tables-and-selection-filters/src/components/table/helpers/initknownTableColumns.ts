import { fieldColumnNameMap } from "../functionality/fieldToColumnName";

export const initKnownTableColumns = (includeTechnical?: boolean) => {
  // these are all technical column names for fields on the rows
  if (includeTechnical) {
    fieldColumnNameMap.set("cursor", "Technical Cursor");
    fieldColumnNameMap.set("id", "Technical Identifier");
    fieldColumnNameMap.set("__typename", "Technical Type");
  }
  fieldColumnNameMap.set("name", "Name");
};
