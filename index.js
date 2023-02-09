const Users = require('./Database/Users');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;
const app = express()

//Middleware File
const UpdateMiddle = require('./Middleware/UpdateMiddle')


//CRUD OPERATION API FILES (ROUTES)
const Read = require('./Routes/Read')
const Create = require('./Routes/Create')
const Update = require('./Routes/Update')
const Delete = require('./Routes/Delete')

app.use(express.json())

app.get('/', (req,resp)=>{
    resp.send('Express App Started Succesfully');
    resp.end();
});
app.use('/create',Create);
app.use('/read', Read);
app.use('/update',UpdateMiddle, Update);
app.use('/delete',Delete);





app.listen(port,()=>{console.log(`App is Listening On ${port}`)});

