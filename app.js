const express = require ("express");
const app = express();

app.use(express.urlencoded({extended:true}));

// const postSchema = new mongoose.Schema({
//     title:String,
//     content:String
// })

// const Post = mongoose.model('Post', postSchema)

const userRoutes = require("./routes/userRoutes");

app.use("/api/v1", userRoutes);
    
module.exports = app