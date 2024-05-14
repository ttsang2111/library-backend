"use strict";

const { Schema, model} = require('mongoose'); // Erase if already required

const COLLECTION_NAME = "User";
const COLLECTION_DOCUMENT = "user";

// Declare the Schema of the Mongo model
var userSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
}, {
    collection: COLLECTION_NAME
});

//Export the model
module.exports = model(COLLECTION_DOCUMENT, userSchema);