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
![photo_2023-01-09_21-26-38](https://user-images.githubusercontent.com/48578445/211351537-5708d413-351f-4049-b02d-d7f5a8af1bb8.jpg)
![photo_2023-01-09_21-26-33](https://user-images.githubusercontent.com/48578445/211351553-fe5f019e-2bb1-455e-8b70-d289f0f50f9d.jpg)
![photo_2023-01-09_21-26-28](https://user-images.githubusercontent.com/48578445/211351560-c0bc7e6c-7388-4c33-b130-a6cc570e5b26.jpg)
![photo_2023-01-09_21-26-24](https://user-images.githubusercontent.com/48578445/211351571-052d6cff-72ac-45b6-afaf-adae5eb9af7d.jpg)
![photo_2023-01-09_21-26-18](https://user-images.githubusercontent.com/48578445/211351584-e95e30d6-d260-4057-a389-bda8ecd1856f.jpg)
![photo_2023-01-09_21-26-00](https://user-images.githubusercontent.com/48578445/211351589-dc567a82-f9c1-4c32-9378-4c5e64734707.jpg)
