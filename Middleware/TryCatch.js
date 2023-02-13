module.exports = async function(error,req,resp,next){
return(req,resp,next)=>{try{
    next();
}
catch(error){
    resp.status(500).send('Express App crashed')
}}
        
        
    
}