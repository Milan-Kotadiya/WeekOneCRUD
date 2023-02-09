const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://0.0.0.0:27017/milandb');
console.log('database connected')

const Schema = new mongoose.Schema({
    username:String,
    mobileno:Number,
    email:String,
    password:String
})
const Users = mongoose.model('users',Schema);
module.exports = Users;
