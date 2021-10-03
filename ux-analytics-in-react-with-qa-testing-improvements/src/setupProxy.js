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
   * this is how express middlewares work:
   * they take in the request and the response object, 
   * and when the middleware-code is done, they call the next() function
   * 
   * express-session doesn't save when the session was created, which is why we'll use
   * the following code to determine if it's new, and save it as a UX event. Inspired by:
   * https://stackoverflow.com/a/59493148/1149845
   * */
  app.use((req, res, next) => {
    if (typeof req.session.isNew === "undefined") {
      req.session.isNew = true;
      req.session.save(next);
    } else if (req.session.isNew) {
      req.session.isNew = false;
      req.session.save(next);
      // saving our UX event:
      const uxEvent = {
        sourceID: "app_general",
        eventType: "session_start",
        eventValue: "new_visit" 
        // if you implement a more permanent session store and user logins, 
        // you could use "eventValue" for re-visits of the same user
      };
      const timeStamp = Date.now();
      const sessionID = req.sessionID;
      sqliteDBaccess.saveUXEvent({ ...uxEvent, timeStamp, sessionID });
    } else {
      next();
    }
  });

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
