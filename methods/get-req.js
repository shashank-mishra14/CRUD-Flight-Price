module.exports = function (req, res) {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  let date = req.url.split("/")[3];
  const regexV4 = new RegExp(
    "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89aAbB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$"
  );
  if (req.url === "/api/flight") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(req.flight));
    res.end();
  } else if (!regexV4.test(date)) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ title: "Bad Request", message: "Invalid ID" }));
    res.end();
  } else if (baseUrl === "/api/flights/" && regexV4.test(date)) {
    res.setHeader("Content-Type", "application/json");
    let filteredFlight = req.flight.filter((flight) => flight.date === date);
    if(flight.length > 0){
      res.statusCode = 200;
      res.write(JSON.stringify(filteredFlight));
    }else{
      res.statusCode = 404;
      res.write(JSON.stringify({ title: "Not Found", message: "Flight not found" }));
      res.end();
  
    }
    res.write();
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.write(
      JSON.stringify({ title: "Not Found", message: "Route not found" })
    );
    res.end();
  }
};
