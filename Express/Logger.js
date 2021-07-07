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

//we can use our logger in sperate file and export it as module 
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
  };
  
  module.exports = logger;
  