const express = require('express');
const router = express.Router();
const Users = require('../Database/Users');


router.post('/', async (req,resp)=>{
    const Data= await req.body
    let  Add = await new Users(Data).save();
    resp.send(Add);
    console.log('Create Api Worked Succesfully');
    resp.end();
});
module.exports = router;