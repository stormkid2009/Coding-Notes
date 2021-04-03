/*  Implement a Root-Level Request Logger Middleware  */

/*
middleware : are functions that take 3 arguments (req,res,next) 
req >>> request object
res >>> response object
next >>> next function
middleware can make side effects to the app:
add information to the request or  response 
to end the cycle they send response and if not the next function gonna start its job.
*/
/*
function (req,res,next){
    console.log("middlewar sent this response");
    next();
}
*/
/*
let's suppose u mount this function on route when it matches its route
the message "middlewar sent......." then it excutes the next function in the stack.
to mount middleware at the root level we can use:
app.use(middlewar function) >>> in this case function will be used for all requests
if we need a specific request like Post>>> app.post(middleware functiion)
and the same for HTTP verbs (DELETE,GET,PUT,...)

*/
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});
//notice the spaces in the string above between req.method and req.path
//alson space before and after (-)