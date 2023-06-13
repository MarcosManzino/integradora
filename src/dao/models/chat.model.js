const mongoose= require('mongoose')

const ChatSchema = new mongoose.Schema({
    user: {
        type:String,
        unique:false,
        required:true,
      },
    message:{
        type:String,
        unique:false,
        required:true, 
    }
  });

const Chat = mongoose.model('message', ChatSchema)
module.exports = Chat