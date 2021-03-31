const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const blogSchema = new Schema({
      title:String,
      message:String,
      creator:String,
      tags:[String],
      selectFile:String,
      likeCount:{
          type:Number,
          dafault:0
      },
      createdBy:{
          type:Date,
          dafault:new Date()
      }
    
  });
  const Blog = mongoose.model('Blog', blogSchema);
  module.exports = Blog
  



