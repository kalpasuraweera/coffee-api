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


//connect to DB
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/coffeeDB'); // database name is coffeeDB
}

// DB schema
const CoffeeSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity : Number,
});

// DB Model



//show selected coffee to the user
.get((req,res)=>{       
    const coffeeID= req.params.coffeeID;
    res.send({coffee :coffeeID});
})

//buy the selected coffee
.post((req,res)=>{     
    const coffeeID= req.params.coffeeID;
    const quantity = req.body.quantity; // post request should include the number of cups as quantity
})

//start server on PORT 5000
app.listen('5000', ()=>{
    console.log('server started');
})