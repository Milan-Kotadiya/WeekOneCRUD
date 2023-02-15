const express = require('express');
const router = express.Router();
const Posts = require('../Database/Posts');



router.post('/:id', async (req,resp)=>{

    try{
        const Author = req.params.id;
        const Data= await req.body


        let Add = await new Posts(
            {title:Data.title,
            content:Data.content,
            createdby:Author,
            likedby:{userId:Author},
            comments:{commentBy:Author,commentMsg:Data.comment}
}).save();
        resp.send(Add);
        console.log('Create Posts Api Worked');
        resp.end();
    }
    catch(error){
        resp.status(500).send('create api crashed')
    }
    
});

router.get('/allposts',async (req,resp)=>{
    try{
        const data = await Posts.find();
        resp.send(data);
    }
    catch(error){
        console.log(error);
        resp.status(500).send('ReadAll Post api crashed')
    }
});
router.get('/allposts/:id',async (req,resp)=>{
    try{
        const data = await Posts.findById(req.params.id);
        resp.send(data);
    }
    catch(error){
        console.log(error);
        resp.status(500).send('ReadAll Post api crashed')
    }
});

module.exports = router;