const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_URL,
    {
        useNewurlParser: true,
        useUnifiedTopology: true,
    }).then(console.log("Backend is")).catch(err=>console.log(err));

app.listen("5000", ()=>{
    console.log("Run")
});