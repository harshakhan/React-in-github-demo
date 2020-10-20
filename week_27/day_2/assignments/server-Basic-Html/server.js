const http = require('http');

const server = http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write('<html><head><title>My node server </title></head><body><h1>Welcome to my server </h1></body></html>');
    res.end()
})

server.listen(5000, () =>{
    console.log('This server is up and running')
})