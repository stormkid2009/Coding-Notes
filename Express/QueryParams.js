/* "Get Query Parameter Input from the Client "
another way to get input from the client is to encode data after
route path.
using query string : delimited by (?) and includes field = value couples.
each couple is sperated by (&).
Express can parse the data from the query string, and populate the object req.query
Some characters, like the percent (%), cannot be in URLs 
and have to be encoded in a different format before you can send them.

************************
route_path: '/library'
actual_request_URL: '/library?userId=546&bookId=6754'
req.query: {userId: '546', bookId: '6754'}
************************
app.route(path).get(handler).post(handler)
This syntax allows you to chain different verb handlers on the same path route.


*/
app.get('/name',(req,res)=>{
    const {first:firstName,last:lastName}=req.query;
    res.json({name :`${firstName} ${lastName}`});
});