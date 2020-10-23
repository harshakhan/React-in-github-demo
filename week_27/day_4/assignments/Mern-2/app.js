const express = require('express')
const { middleware} = require('./middleware')
const app = express()

app.use(express.json())
app.use(middleware)

app.get('/', (req,res) =>{
    res.status(200)
    res.send('Welcome Home')
})

app.get('/name', (req,res) =>{
    const name= req.body.name
    if(name === undefined || name === ""){
        res.send("Error Not Found")
    }
    res.status(200).json({echo:"Your name is " + name})
})

app.post('/echo',(req,res) =>{
    const name =req.body.name
    res.status(201).json({name:name})
})
app.listen(8000, () =>{
        console.log('The server is up and running on port 8000')
})