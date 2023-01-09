const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));


//connect to DB
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/coffeeDB'); // database name is coffeeDB
}

// DB schema
const coffeeSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity : Number,
});

// DB Model
const Coffee = mongoose.model('Coffee', coffeeSchema);





app.route('/')
//show all products
.get((req,res)=>{
    Coffee.find({},(err,proucts)=>{
        res.send(proucts);
    })    
})
//add a new product
.post((req,res)=>{
//  post request should inculde fllowing data
//     {
//   name: String,
//   price: Number,
//   quantity : Number,
//     }
    //save new coffee in DB
    const newCoffee = new Coffee(req.body);
    newCoffee.save(err=>{
        if(!err){
            res.send("succussfully added a new coffee");
        }

    })


})

//CRUD for selected coffee
app.route('/coffee/:coffeeID')  // coffeeID is the _id that automatically added by MongoDB
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