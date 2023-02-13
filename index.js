// const Users = require('./Database/Users');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;
const app = express()



// Catch Unhandle Rejection
process.on('unhandledRejection',(error)=>{
    //we can use winston for register in log
    console.log('We Got unhandledRejection',error)
});
// Catch Uncaught Exception
process.on('uncaughtException',(error)=>{
    console.log('We Got uncaughtException',error)
});


app.use(express.json())
const Routes = require('./RouteuseIndex/RouteExtract')(app); //Here we Pass All Routes

app.get('/', (req,resp)=>{
        resp.send('Express App Started Succesfully');
        resp.end();
});

app.listen(port,()=>{console.log(`App is Listening On ${port}`)});