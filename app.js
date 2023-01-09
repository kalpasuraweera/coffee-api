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
        if(err){
            console.log(err);
        }else if(!proucts){
            res.status(404).send('Not found');
        }else{
            res.send(proucts);
        }
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
            res.sendStatus(200);
        }else{
            console.log(err);
        }

    })


})




//CRUD for selected coffee
app.route('/coffee/:coffeeID')  // coffeeID is the _id that automatically added by MongoDB
//show selected coffee to the user
.get((req,res)=>{       
    const coffeeID= req.params.coffeeID;
    Coffee.findOne({_id:coffeeID}, (err, coffee)=>{
        if(err){
            console.log(err);
        }else if(!coffee){
            res.status(404).send('Not found');
        }else{
            res.send(coffee);
        }
    })
})

//update DB when a user bought the selected coffee
.patch((req,res)=>{     
    const coffeeID= req.params.coffeeID;
    const coffeeCount = req.body.quantity; // patch request should include the number of cups as quantity
    Coffee.findOneAndUpdate({_id:coffeeID},{$inc : {quantity:-coffeeCount}},{new: true}, (err, coffee)=>{
        if(err){
            console.log(err);
        }else{
            const userCost= coffee.price*coffeeCount;
            res.send({cost:userCost});
        }
    })

})



//start server on PORT 5000
app.listen('5000', ()=>{
    console.log('server started');
})