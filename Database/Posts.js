const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://0.0.0.0:27017/milandb');
console.log('database connected')

const commentSchema = new mongoose.Schema({
    commentBy:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'users'
    },
    commentMsg : {
        type:String,
        required:true
    }
})


const likeSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref: 'users' // reference collection name
    }
})

const Schema = new mongoose.Schema({
    title:String,
    content:String,
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'users' // reference collection name
    },
    likedby:[likeSchema],
    comments:[commentSchema]
})
const Posts = mongoose.model('posts',Schema);
module.exports = Posts;