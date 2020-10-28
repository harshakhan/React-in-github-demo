const express = require('express');
const {middleware_1,middleware_2} = require("./middleware");


const app = express();
app.use(middleware_1,middleware_2)

app.get('/',(req,res) => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.write(`<html><title>Masai Testing</title><h1>Welcome to Masai</h1></html>`);
    res.end();

})

app.get('/about', (req,res) => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.write(`<html><title>Masai Testing</title><h1>About me</h1></html>`);
    res.end()
})
app.get('/faq',(req,res) => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.write(`<html><title>Masai Testing</title><h1>Faq</h1></html>`);
    res.end()
})

app.listen(3000, () =>{
    console.log('The server is up and running')
})