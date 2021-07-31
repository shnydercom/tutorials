var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

// this is the table name where the UX events are stored. You can change it, the below code will pick this up
const UX_EVENTS_TABLE_NAME = "uxevents";

// these are the column names and their SQLite- datatypes. When you change them, 
// make sure they correspond to src/analytics/UXEventInterfaces.ts
const UX_EVENTS_COLUMN_MAP = {
  sourceID: "TEXT",
	eventType: "TEXT",
	eventValue: "TEXT",
  timeStamp: "DATETIME"
}

// all functions below take the above configuration to create statements, no modifications should be needed

export function setupUXEventsTable(){
  db.run(`CREATE TABLE ${UX_EVENTS_TABLE_NAME} (${
    Object.keys(UX_EVENTS_COLUMN_MAP)
      .map((cKey) => {
        return `${cKey} ${UX_EVENTS_COLUMN_MAP[cKey]}`
      })
      .reduce((prev, cur) => prev + cur, "")
  })`);
  db.close();
}

export function saveUXEvent(uxEvent) {
  const statement = db.prepare(`INSERT INTO ${UX_EVENTS_COLUMN_MAP} VALUES (
    ${Object.keys(UX_EVENTS_COLUMN_MAP).map(() => "?").join(", ")}
  )`);
  Object.keys(UX_EVENTS_COLUMN_MAP).forEach((cKey) => {
    statement.run(cKey, uxEvent[cKey]);
  });
  statement.finalize();
}

export async function filterAllByColumn(column, filterValue){
  const result = await db.all(`SELECT * FROM ${UX_EVENTS_TABLE_NAME} WHERE ${column} = ${filterValue}`);
  return result;
};

// this should be called when your application exits
export function closeUXDB(){
  db.close();
}