var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./yourUXdatabase.sql"); // you can pass ":memory:" if you don't want to save to disk or "./yourUXdatabase.sql"

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

// this query calculates the time relative to the first event of the session
const SQL_GET_RELATIVE_AND_MIN_TIME = `SELECT sourceID, eventType, eventValue, timeStamp, "${UX_EVENTS_TABLE_NAME}".sessionID, firstEventTimeStamp, timestamp - firstEventTimeStamp as relativeTime from "${UX_EVENTS_TABLE_NAME}" INNER JOIN (SELECT Distinct sessionID, min(timestamp) as firstEventTimeStamp from "${UX_EVENTS_TABLE_NAME}" group by sessionID) as tableMin ON tableMin.sessionID = "${UX_EVENTS_TABLE_NAME}".sessionID`;

// all functions below take the above configuration to create statements, no modifications should be needed

function setupUXEventsTable() {
  db.run(
    `CREATE TABLE IF NOT EXISTS ${UX_EVENTS_TABLE_NAME} (${Object.keys(
      UX_EVENTS_COLUMN_MAP
    )
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
  let query = `SELECT * FROM (${SQL_GET_RELATIVE_AND_MIN_TIME})`;
  if (column && filterValue)
    query = `SELECT * FROM (${SQL_GET_RELATIVE_AND_MIN_TIME}) WHERE ${column} = '${filterValue}'`;
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
