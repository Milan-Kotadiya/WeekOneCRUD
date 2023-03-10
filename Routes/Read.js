const express = require('express');
const router = express.Router();
const Users = require('../Database/Users');

const ReadUser = require('../Middleware/CreateJWT')
router.get('/', async (req,resp)=>{
    try{
        let userdata = await Users.find();
        resp.send(userdata);
        console.log('Read Api Worked Succesfully');
        resp.end();
    }
    catch(error){
        resp.status(500).send('Read api crashed')
    }
});
router.get('/:id', ReadUser, async (req,resp)=>{
    try{
        let userdata = await Users.findById(req.params.id);
        resp.send(userdata);
        console.log('Read Api Worked Succesfully');
        resp.end();
    }
    catch(error){
        resp.status(500).send('Read api crashed')
    }
});
module.exports = router;