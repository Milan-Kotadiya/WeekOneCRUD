function UpdateMiddle(req,resp,next) {
    try{
        console.log("UpdateMiddleware Worked")
        next();
    }
 catch(error){
    console.log('Middleware Api Crashed');
    next();
 }
}

module.exports = UpdateMiddle;