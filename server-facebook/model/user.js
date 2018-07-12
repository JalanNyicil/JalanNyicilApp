const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = Schema({
    fbId : {type: String, required: true, unique: true},
    name : String,
    email : {type: String, required:true, unique: true},
},{
    timestamps : true
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema);
