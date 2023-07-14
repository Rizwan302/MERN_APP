const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    location:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        uniqe: true
    },
    password:{
        type: String,
        required:true
    },
    confirmpassword:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default:Date.now
    }
})


const user = new mongoose.model("user", UserSchema)

module.exports = user