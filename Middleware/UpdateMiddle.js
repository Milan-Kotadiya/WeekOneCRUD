function UpdateMiddle(req,resp,next) {
    console.log("UpdateMiddleware Worked")
    next();
}

module.exports = UpdateMiddle;