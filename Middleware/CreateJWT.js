const jwt = require('jsonwebtoken');

const KEY =  process.env.JWTKEY || 'JWTKEY'

async function ReadJwt (req,resp,next){
    try{
        const id= req.params.id
        const token = jwt.sign({name:id},KEY);
    console.log(token)
    next();
    }
 catch (error) {
    console.log(error)
 }  
}
module.exports = ReadJwt;