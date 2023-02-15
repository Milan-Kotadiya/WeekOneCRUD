
//CRUD OPERATION API FILES (ROUTES)
const Read = require('../Routes/Read')
const Create = require('../Routes/Create')
const Update = require('../Routes/Update')
const Delete = require('../Routes/Delete')
const Createpost = require('../Routes/Createpost')

const Render = require('../Routes/Render')
const RenderPug = require('../Routes/RenderPug')
//Middleware File
const UpdateMiddle = require('../Middleware/UpdateMiddle')


module.exports = function(app){
    app.use('/create',Create);
    app.use('/read', Read);
    app.use('/update',UpdateMiddle, Update);
    app.use('/delete',Delete);
    app.use('/posts',Createpost);

//Renderfile
    //Normal way
    app.get('/normal',(req,resp)=>{
    resp.sendFile('C:/Users/milan.kotadiya/Desktop/Milan/crudop/views/index.html');
    console.log('Normal Way File Rendered');
});
    //EJS
    app.set('view engine','ejs');
    app.use('/ejs',Render);
//PUG
    app.set('view engine','pug');
    app.use('/pug',RenderPug);

}