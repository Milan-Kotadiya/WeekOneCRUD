const Errors=()=>{
    // Catch Unhandle Rejection
    process.on('unhandledRejection',(error)=>{
        //we can use winston for register in log
        console.log('We Got unhandledRejection',error)
    });
    // Catch Uncaught Exception
    process.on('uncaughtException',(error)=>{
        console.log('We Got uncaughtException, Look',error.message)
    });
}

module.exports = Errors;
