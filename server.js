const http = require("http");
const getReq = require("./methods/get-req");
const postReq = require("./methods/post-req");
const putReq = require("./methods/put-req");
const deleteReq = require("./methods/delete-req");
let flight = require("./data/flight.json");
//require('dotenv').config();

const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  req.flight = flight;
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    default:
  }
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify({ title: "Not Found", message: "Route not found" }));
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
