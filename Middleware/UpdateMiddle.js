function UpdateMiddle(req,resp,next) {
    try{
        console.log("UpdateMiddleware Worked")
        next();
    }
 catch(error){
    console.log('Middleware Api Crashed');
 }
}

module.exports = UpdateMiddle;