const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  const data = {
    date: new Date()-new Date('January 1, 1970, 00:00:00 UTC'),
    userAgent: req.headers["user-agent"],
  };

  res.write(JSON.stringify(data));


  res.end();
});

server.listen(8002, () => {
  console.log("Server is listening to port 8002");
});