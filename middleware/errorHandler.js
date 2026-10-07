const constants=require("../constants")

const errorHandler =(err,req,res,next)=>{
    const statusCode=res.statusCode ? res.statusCode :500
    switch (statusCode)
    {
        case constants.VALIDATION_ERROR: 
             res.json({
                title: "validation failed",
                message:err.message,
                stackTrace:err.stack
             });
             break;
        case constants.FORBIDDEN: 
             res.json({
                title: "FORBIDDEN ERROR",
                message:err.message,
                stackTrace:err.stack
             });
             break;
        case constants.UNAUTHORIZED: 
             res.json({
                title: "UNAUTHORIZED",
                message:err.message,
                stackTrace:err.stack
             });
             break;
        case constants.NOT_FOUND: 
             res.json({
                title: "NOT FOUND",
                message:err.message,
                stackTrace:err.stack
             });
             break;
        case constants.SERVER_ERROR: 
             res.json({
                title: "SERVER_ERROR",
                message:err.message,
                stackTrace:err.stack
             });
             break;
       default:
        res.status(500).json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack
    });
    break;

    }
}
module.exports=errorHandler;