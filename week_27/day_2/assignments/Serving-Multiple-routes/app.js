const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.write("<h1>Welcome to the Home Page.</h1>");
      res.end();
      break;
    case "/about":
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.write("<h1>This is the about page</h1>");
      res.end();
      break;
    case "/data":
      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", "attachment;filename=file1.csv");
      res.writeHead(200);
      res.write("id,name,email\n1, Harsha Khan, harsha@gmail.com");
      res.end();
      break;
    default:
      res.writeHead(404, "text/plain");
      res.write("Page Not Found Please Try again");
      res.end();
  }
});

server.listen(8031, () => {
  console.log("Server is listening on port 8022");
});