export const fieldColumnNameMap = new Map<string, string>();
const DEFAULT_COLUMN_NAME = "Column name"; //here's a chance for i18n!
const DEFAULT_FIELD_NAME = "id";

export const fieldToColumnName: (input: string) => string = (input) => {
  return fieldColumnNameMap.get(input) || DEFAULT_COLUMN_NAME;
};

export const columNameToField: (input: string) => string = (input) => {
  // for this to work, set compilerOptions.downlevelIteration in your .tsconfig-file
  for (let [key, value] of fieldColumnNameMap.entries()) {
    if (value === input) return key;
  }
  return DEFAULT_FIELD_NAME;
};
