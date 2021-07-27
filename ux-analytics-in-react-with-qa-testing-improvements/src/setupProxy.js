const bodyParser = require("body-parser");
module.exports = function (app) {
  //body-parser lets you use the JSON-body of the request
  app.use(bodyParser.json());
  app.post("/api/log", function (req, res) {
    const reqBody = req.body;
    const timeStamp = Date.now();
    //sending back what we received. In a real-world scenario, it makes more sense to save the request asynchronously and return a NO-CONTENT status code to the client:
    //res.status(204).send();
    res.status(200).json({
      timestamp: timeStamp,
      received_data: reqBody,
    });
  });
};
