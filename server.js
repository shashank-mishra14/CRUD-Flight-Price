const http = require("http");

//require('dotenv').config();

const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      getReq(req, res);
      break;
    case "PUT":
      getReq(req, res);
      break;
    case "DELETE":
      getReq(req, res);
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
