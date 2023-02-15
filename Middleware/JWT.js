const jwt = require('jsonwebtoken');

const KEY =  process.env.JWTKEY || 'JWTKEY'
const Data = {
    name:'Milan',
    userid: 'qwertyuio',
    password:'Milan'
}
const token = jwt.sign(Data,KEY);

async function DeleteJwt (req,resp,next){
    try{
        const bodytoken = await req.header('x-auth-token');
        if(!bodytoken){ resp.status(400).send('Token Not found')};
        if (bodytoken!==token) { resp.status(400).send('Invalid Token');};
        if(bodytoken==token){ next();};
    }
 catch (error) {
    console.log(error)
 }  
}



module.exports = DeleteJwt;
