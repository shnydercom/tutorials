const bodyParser = require("body-parser");
const sqliteDBaccess = require("./sqliteDBaccess");

sqliteDBaccess.setupUXEventsTable();

/**
 * these are modifications to the web-dev-server. They'll only affect your development server started with
 * `react-scripts start`, not the final build
 * */
module.exports = function (app) {
  //body-parser lets you use the JSON-body of the request
  app.use(bodyParser.json());
  /**
   * sets up the endpoint that handles the `sendBeacon`-call from the client
   * */
  app.post("/api/log", function (req, res) {
    const reqBody = req.body;
    const timeStamp = Date.now();
    sqliteDBaccess.saveUXEvent({ ...reqBody, timeStamp });
    res.status(204).send();
    /*
    //uncommenting this would sent back what we received. In a real-world scenario, it makes 
    //more sense to save the request asynchronously and return a NO-CONTENT status code to the client:
    res.status(200).json({
      timestamp: timeStamp,
      received_data: reqBody,
    });
    */
  });

  /**
   * sets up the endpoint so that our data analysis components can show the data from the sqlite database
   * */
  app.get("/api/log", function (req, res) {
    const column = Object.keys(req.query)[0];
    const filterValue = req.query[column];
    sqliteDBaccess.filterAllByColumn(column, filterValue).then(
      (queryResult) => {
        res.status(200).json(
          queryResult
        );
      },
      (e) => {
        console.error(e);
        res.status(500).send();
      }
    );
  });
};
