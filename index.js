// All Code Gone in to Findex.js
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server,{cors:{origin:"*"}});

//Port
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

//EJS
app.set('view engine','ejs');
app.get('/', async (req,resp)=>{
        try{
            resp.render('Socket.ejs');
        }
        catch(error){
            resp.status(500).send('Render api crashed')
        }
});

server.listen(port,()=>{console.log(`App is Serving on Port:: ${port}`)})

//io start here

io.on('connection',(socket)=>{
        console.log(`User connected id : ${socket.id}`)
        socket.on('message',(data)=>{
                console.log(data)
        })
});