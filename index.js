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

const Render = require('./Routes/Render')
const RenderPug = require('./Routes/RenderPug')

app.use(express.json())

app.get('/', (req,resp)=>{
    resp.send('Express App Started Succesfully');
    resp.end();
});
app.use('/create',Create);
app.use('/read', Read);
app.use('/update',UpdateMiddle, Update);
app.use('/delete',Delete);


//Renderfile
//Normal way
app.get('/normal',(req,resp)=>{
    resp.sendFile(__dirname+'/views/index.html');
    console.log('Normal Way File Rendered');
})
//EJS
app.set('view engine','ejs');
app.use('/ejs',Render);
//PUG
app.set('view engine','pug');
app.use('/pug',RenderPug);


app.listen(port,()=>{console.log(`App is Listening On ${port}`)});