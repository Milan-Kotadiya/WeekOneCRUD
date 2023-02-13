const express = require('express');
const router = express.Router();
const Users = require('../Database/Users');


router.post('/', async (req,resp)=>{

    try{
        const Data= await req.body
        let  Add = await new Users(Data).save();
        resp.send(Add);
        console.log('Create Api Worked Succesfully');
        resp.end();
    }
    catch(error){
        resp.status(500).send('create api crashed')
    }
    
});
module.exports = router;