var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(":memory:");

// this is the table name where the UX events are stored. You can change it, the below code will pick this up
const UX_EVENTS_TABLE_NAME = "uxevents";

/**
 * these are the column names and their SQLite- datatypes. When you change them,
 * make sure they correspond to src/analytics/UXEventInterfaces.ts
 * sessionID and timeStamp are added server-side
 * */
const UX_EVENTS_COLUMN_MAP = {
  sourceID: "TEXT",
  eventType: "TEXT",
  eventValue: "TEXT",
  timeStamp: "DATETIME",
  sessionID: "TEXT",
};

// all functions below take the above configuration to create statements, no modifications should be needed

function setupUXEventsTable() {
  db.run(
    `CREATE TABLE ${UX_EVENTS_TABLE_NAME} (${Object.keys(UX_EVENTS_COLUMN_MAP)
      .map((cKey) => {
        return `${cKey} ${UX_EVENTS_COLUMN_MAP[cKey]}`;
      })
      .join(", ")})`
  );
}

function saveUXEvent(uxEvent) {
  const columnNames = Object.keys(UX_EVENTS_COLUMN_MAP);
  const statement = db.prepare(`INSERT INTO ${UX_EVENTS_TABLE_NAME} VALUES (
    ${columnNames.map(() => "?").join(", ")}
  )`);
  const placeHolderFills = columnNames.map((cKey) => {
    return uxEvent[cKey];
  });
  statement.run(placeHolderFills);
  statement.finalize();
}

function filterAllByColumn(column, filterValue) {
  if (!column || !filterValue)
    return Promise.reject("column or filterValue need to be specified");
  const query = `SELECT * FROM ${UX_EVENTS_TABLE_NAME} WHERE ${column} = '${filterValue}'`;
  return new Promise(function (resolve, reject) {
    db.all(query, function (err, rows) {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
}

// this should be called when your application exits
function closeUXDB() {
  db.close();
}

exports.setupUXEventsTable = setupUXEventsTable;
exports.saveUXEvent = saveUXEvent;
exports.filterAllByColumn = filterAllByColumn;
exports.closeUXDB = closeUXDB;
