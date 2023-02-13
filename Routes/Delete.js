const express = require('express');
const router = express.Router();
const Users = require('../Database/Users');


router.delete('/', async (req,resp)=>{
    try{
        let data;
    if(req.body.username){data ={"username":req.body.username}}
    if(req.body.email){data ={"email":req.body.email}}
    if(req.body.password){data ={"password":req.body.password}}
    if(req.body.mobileno){data ={"mobileno":req.body.mobileno}}
    const Delete = await Users.deleteOne(data)
    console.log('Delete Api Worked Succesfully');
    resp.send(Delete)
    }
    catch(error){
        resp.status(500).send('Delete api crashed')
    }
});
router.delete('/:id', async (req,resp)=>{
    try{
        const Delete = await Users.deleteOne({_id:req.params.id})
        console.log('Delete Api Worked Succesfully');
        resp.send(Delete)
    }
    catch(error){
        resp.status(500).send('Delete api crashed')
    }
});
module.exports = router;