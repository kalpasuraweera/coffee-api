const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

//show all products
app.route('/')
.get((req,res)=>{
    res.send("hi");    
})

//CRUD for selected coffee
app.route('/coffee/:coffeeID')

//show selected coffee to the user
.get((req,res)=>{       
    const coffeeID= req.params.coffeeID;
    res.send(coffeeID);
})

//buy the selected coffee
.post((req,res)=>{     
    const coffeeID= req.params.coffeeID;
})

//start server on PORT 5000
app.listen('5000', ()=>{
    console.log('server started');
})