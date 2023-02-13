const express = require('express');
const router = express.Router();


router.get('/', async (req,resp)=>{
    try{
        resp.render('index');
        console.log('PUG File Rendered');
    }
    catch(error){
        resp.status(500).send('Render api crashed')
    }
});
module.exports = router;