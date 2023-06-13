const crypto = require("crypto");
const requsetBodyparser = require("../util/body-parser");
module.exports = async function (req, res) {
  if (req.url === "/api/flight") {
    try {
      let body = await requsetBodyparser(req);
      body.date = crypto.randomUUID();
      req.flight.push(body);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end();
    } catch (err) {
      console.log(err);
      res.writeHead(400, { "Content-Type": "application/json" });

      res.end(
        JSON.stringify({
          title: "Internal Server Error",
          message: "Something went wrong",
        })
      );
    }
  }
};
