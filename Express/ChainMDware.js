/*
we can chain middleware inside route definition
this approach is useful :
1-split server operations into smaller units that leads to better app structure and
we can reuse the code in other different places.
2- perform some validation on the data.
*/

app.get('/user', function(req, res, next) {
    req.user = getTheUserSync();  // Hypothetical synchronous operation
    next();
  }, function(req, res) {
    res.send(req.user);
  });
//we request for server time in the next code
app.get('/now',(req,res,next)=>{
    req.time = new Date().toString();
    next();
},(req,res)=>{
    res.json({time:req.time})
});