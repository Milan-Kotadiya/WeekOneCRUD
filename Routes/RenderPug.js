const express = require('express');
const router = express.Router();


router.get('/', async (req,resp)=>{
    resp.render('index');
    console.log('PUG File Rendered');
});
module.exports = router;