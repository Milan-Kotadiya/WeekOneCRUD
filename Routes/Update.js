const express = require('express');
const router = express.Router();
const Users = require('../Database/Users');


router.put('/:id', async (req,resp)=>{
    let data={};
    let errors ={
        username:[],
        mobileno:[],
        email:[],
        password:[]
    }

    //Data Validations
    if(req.body.username && typeof req.body.username == 'string' && req.body.username.length>1){  data['username'] =req.body.username;};
        if (!req.body.username) {errors.username.push('username not found');};
        if (typeof req.body.username !== 'string') {errors.username.push('username Should be in string');};
        if (req.body.username.length<1) {errors.username.push('please enter username');};


    if(req.body.mobileno && (req.body.mobileno).toString().length === 10 && typeof req.body.mobileno == 'number'){data['mobileno'] =req.body.mobileno;}
        if (!req.body.mobileno) {errors.mobileno.push('mobileno not found');};
        if (typeof req.body.mobileno !== 'number') {errors.mobileno.push('mobileno Should be in Digits');}
        if ((req.body.mobileno).toString().length !== 10) {errors.mobileno.push('Mobile Number Should be 10 Digits');}


    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      const emailpattern = validateEmail(req.body.email)

    if(req.body.email && typeof req.body.email == 'string' && emailpattern ){data['email'] =req.body.email;};
        if (!req.body.email) {errors.email.push('email not found');};
        if (typeof req.body.email !== 'string') {errors.email.push('email Should be in string');};
        if (!emailpattern) {errors.email.push('invalid email pattern');};

    if(req.body.password && typeof req.body.password == 'string'){data['password'] =req.body.password;};
        if (!req.body.password) {errors.password.push('password not found');};
        if (typeof req.body.password !== 'string') {errors.password.push('password Should be in string');};
 
    //Errors Validations
    if(errors.username.length<1){ delete errors.username}
    if(errors.mobileno.length<1){ delete errors.mobileno}
    if(errors.email.length<1){ delete errors.email}
    if(errors.password.length<1){ delete errors.password}

    //Updating in Database
    const update = await Users.findByIdAndUpdate(req.params.id,data,{new:true})
    console.log('Update Api Worked Succesfully');

    //Sending Response
    resp.send(errors?{data:update,errors:errors}:{data:update})

});
module.exports = router;
