// const { Router } = require('express')
const express =require('express')
const {getpost , createpost} =require('../controllers/posts.js')
// const createpost =require('../controllers/posts.js')
const  router=express.Router();

 router.get('/',getpost);
router.post('/',createpost)
 module.exports = router

