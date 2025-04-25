function customMiddleware(req,res,next){ 
    console.log('I am Custom Middleware')
    next() // Call the next middleware or route handler
}

module.exports=customMiddleware