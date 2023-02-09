const express = require('express');
const router = express.Router();
const Users = require('../Database/Users');


router.get('/', async (req,resp)=>{
    let userdata = await Users.find();
    resp.send(userdata);
    console.log('Read Api Worked Succesfully');
    resp.end();
});
module.exports = router;