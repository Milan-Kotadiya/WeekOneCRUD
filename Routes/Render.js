const express = require('express');
const router = express.Router();


router.get('/', async (req,resp)=>{

    resp.render('index.ejs');
    console.log('EJS Way File Rendered');
});
module.exports = router;