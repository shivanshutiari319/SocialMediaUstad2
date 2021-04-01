
const postmessage=require('../models/postmessage.js')
const { post } = require('../routes/posts.js')

const getpost =async (req,res)=>{


    try {
        const postmessage = await postmessage.find();
        res.status(200).json(postmessage); 
      

    } catch (error) {
        res.status(404).json({message:error.message})
        
    }

// res.send("getpost successfull");

}
const createpost = async (req,res)=>{
const post =req.body;
const newPost =new postmessage(post);
try {
     
    await newPost.save();
   res.status(201).json({newPost});

} catch (error) {
    res.status(404).json({message:error.message})
}





}

module.exports = {getpost,createpost}
// module.exports = {createpost}