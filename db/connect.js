const mongoose = require("mongoose");

const uri = "mongodb+srv://Ashish:kHsU6Og8Al4g51Ml@cluster0.jfy7hhi.mongodb.net/";

const connectDB = () => {
    // console.log("connect db")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
};

module.exports = connectDB;
