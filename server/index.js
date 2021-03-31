const bodyParser = require('body-parser')
const express =require('express')
const mongoose=require('mongoose')
const PostRoute = require('./routes/posts.js')
require('dotenv').config();
const cors = require('cors')
const app=express();
app.use('/post',PostRoute)
app.use(cors());
app.get('/',(req,res)=>{
    res.send("hello shivanshu");
})

const shanvi=process.env.BHARTI;
const PORT=process.env.PORT||5000
mongoose.connect(shanvi, {useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{
    app.listen(PORT,(req,res)=>{
    console.log("hello trisha");
    })

})
.catch((err)=>{
    console.log(err)

});
mongoose.set('useFindAndModify',false);