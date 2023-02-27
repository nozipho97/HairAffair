function errorHandling(err,req,res,next){
    if(err){
        const status =  err.status || 500;
        res.status(status).json(
            {
                status: status,
                err: 'An unxpected error occurred.Please reload the page again.'

        }
        )
    }
    next();
}
module.exports = {errorHandling};