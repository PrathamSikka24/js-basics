const http = require('http');
const express = require('express');
const { type } = require('os');
const app = express();

const port =3000;

app.get('/', (req, res)=>{
    res.setHeader("Content-Type", "application/json")
    res.send({message:'ye apna JSON response hai'})
console.log('Server started')
})

app.listen(port, function (err){
    if (err){
        console.log(err);
    }
    console.log('Server running well at port 3000')
})
