const express = require('express');
const app = express();

app.get('/',(req,res) =>{
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.write(`<html><title>Masai Testing</title><h1>Welcome to Masai!</h1></html>`);
    res.end();
})
app.get('/home',(req,res) =>{
    res.redirect('/')
})
app.get('/search',(req,res) =>{
    res.redirect('https://www.google.com')
})
app.listen(3000, () => {
    console.log('The server is up and running')
})