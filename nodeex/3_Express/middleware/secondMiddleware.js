function middleware2(req,res,next){ 
    console.log('I am second Middleware')
    next() // Call the next middleware or route handler
}
module.exports=middleware2