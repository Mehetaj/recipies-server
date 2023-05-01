const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors')

app.use(cors())


const chefs = require('./chefs.json')

app.get('/', (req , res) => {
    res.send("Assignment 10 server running")
})

app.get('/chefs', (req ,res) => {
    res.send(chefs)
})


app.listen(port, () => {
console.log('Server is running on' , port);
})