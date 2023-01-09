# coffee-api
This is a REST API for a coffee app.

# What you can do
1. View coffee list
2. View a specipec coffee
3. Buy a coffee
4. Add a coffee
5. Delete a coffee
6. Delete all coffees

# DB Model
{
  name: String,
  price: Number,
  quantity : Number,
}

I store quantity and i decrement it when someone buys and if there is no enough products i display a error message.

# How to run the program
1. Go to the project directroy
2. Open terminal and run node app.js or nodemon app.js (You should start the mongo shell before doing this)
3. Open the Postman and add some coffees with Post method
4. Then you can try all the things I mentioned above(GET/Post/Delete/Patch)

# Samples

