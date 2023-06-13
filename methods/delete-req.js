const writeToFile = require("../util/write-to-file"); 
module.exports = function (req, res) {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  let date = req.url.split("/")[3];
  const regexV4 = new RegExp(
    "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89aAbB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$"
  );
  if (!regexV4.test(date)) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ title: "Bad Request", message: "Invalid ID" }));
    res.end();
  } else if (baseUrl === "/api/flight/" && regexV4.test(date)){
    const index =req.flight.findIndex((flight) => {return flight.date === date});

    if(index === -1){
      res.statusCode = 404;
      res.write(JSON.stringify({ title: "Not Found", message: "Flight not found" }));
      res.end();
    }else{
      req.flight.splice(index, 1);
      writeToFile(req.flight);
      res.writeHead(204, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ title: "Flight deleted", message: "Flight deleted" }));
    }
  }else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.write(
      JSON.stringify({ title: "Not Found", message: "Route not found" })
    );
    res.end();
  }
}