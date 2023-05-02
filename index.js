const express = require('express')
const app = express()
const port = process.env.PORT ||5000;
const cors = require('cors')

app.use(cors())


const chefs = require('./chefs.json')

app.get('/', (req , res) => {
    res.send("Assignment 10 server running")
})

app.get('/chefs', (req ,res) => {
    res.send(chefs)
})

app.get('/chefs/:id', (req , res) => {
    const id = req.params.id;
    const item = chefs.find(p => p.id == id);
    res.send(item)
})


app.listen(port, () => {
console.log('Server is running on' , port);
})