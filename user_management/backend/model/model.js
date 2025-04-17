const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    position:String
})

const userModel = mongoose.model("products",userSchema);

module.exports = userModel;