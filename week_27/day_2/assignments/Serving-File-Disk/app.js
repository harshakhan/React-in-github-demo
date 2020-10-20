const http = require("http");
const fs = require("fs");

fs.readFile("./persons.json", (error, data) => {
  if (error) {
    console.log(error);
  } 
  else {
    http
      .createServer(function (req, res) {
        res.writeHeader(200, { "Content-Type": "application/json" });
        res.write(data);
        res.end();
      })
      .listen(9007, () => {
        console.log("The server is up and running");
      });
  }
});