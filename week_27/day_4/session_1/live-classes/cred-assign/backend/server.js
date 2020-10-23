const express = require('express');
const students = require('./students')
const cors = require('cors')
const app = express();

app.use(cors());

app.get('/api/students', (req, res) =>{
    res.send(students);

})

app.listen(5001, () =>{
    console.log('The server is up and running')
})