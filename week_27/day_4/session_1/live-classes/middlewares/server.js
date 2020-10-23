const express = require('express');
const {m1,m2} = require('./middleware')

const app= express();

app.use(m1)
app.use(m2)

app.get('/', (req,res) =>{
    console.log('Hello World')
})

app.listen(5001, () =>{
    console.log('The server is up and running')
})