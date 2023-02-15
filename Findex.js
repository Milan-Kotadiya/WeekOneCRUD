const Users = require('./Database/Users');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;
const app = express()

// Here All Error will imported = Handling and Logging Errors
const Errors = require('./Middleware/Errors')();

app.use(express.json());

const Routes = require('./RouteuseIndex/RouteExtract')(app); //Here we Pass All Routes

app.get('/',(req,resp)=>{
        resp.send('Express App Started Succesfully');
        resp.end();
});

app.listen(port,()=>{console.log(`App is Listening On ${port}`)});