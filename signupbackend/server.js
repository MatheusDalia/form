const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

//connect to mongoose
mongoose.connect("mongodb+srv://matheusdalia:pedrokaramazov@cluster0.g0lta.mongodb.net/form")

    

const PORT = process.env.PORT || 5000;

//require route
app.use("/", require("./routes/newOrderRoute"))

app.listen(4000, ()=> console.log("server is up and running"))

