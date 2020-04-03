const mongoose = require("mongoose");

mongoose.connnect("mongodb://localhost:27017/eshop" , (error)=> {
    if(!error)
    {
        console.log("Success");
    }
    else{
        console.log("Error connecting to database");
    }
});