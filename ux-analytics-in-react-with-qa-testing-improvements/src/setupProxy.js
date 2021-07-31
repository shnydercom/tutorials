const bodyParser = require("body-parser");
const session = require("express-session");
const sqliteDBaccess = require("./sqliteDBaccess.js");

const memoryStore = new session.MemoryStore();
sqliteDBaccess.setupUXEventsTable();

/**
 * these are modifications to the web-dev-server. They'll only affect your development server started with
 * `react-scripts start`, not the final build
 * */
module.exports = function (app) {
  //body-parser lets you use the JSON-body of the request
  app.use(bodyParser.json());
  app.use(
    session({
      secret:
        "//TODO youShouldReplaceThisStringWithASecretIfThisCodeEverLeavesYourDevEnvironment",
      resave: false,
      saveUninitialized: true,
      store: memoryStore,
    })
  );
  /**
   * sets up the endpoint that handles the `sendBeacon`-call from the client
   * */
  app.post("/api/log", function (req, res) {
    const reqBody = req.body;
    const timeStamp = Date.now();
    const sessionID = req.sessionID;
    sqliteDBaccess.saveUXEvent({ ...reqBody, timeStamp, sessionID });
    res.status(204).send();
  });

  /**
   * sets up the endpoint so that our data analysis components can show the data from the sqlite database
   * */
  app.get("/api/log", function (req, res) {
    const column = Object.keys(req.query)[0];
    if(!column) {
      res.status(400).send("you did not specify search parameters in URL query parameters");
      return;
    }
    const filterValue = req.query[column];
    sqliteDBaccess.filterAllByColumn(column, filterValue).then(
      (queryResult) => {
        res.status(200).json(queryResult);
      },
      (e) => {
        console.error(e);
        res.status(500).send(e);
      }
    );
  });
};
