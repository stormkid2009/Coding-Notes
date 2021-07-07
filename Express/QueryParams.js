/* "Get Query Parameter Input from the Client "
another way to get input from the client is to encode data after
route path.
using query string : delimited by (?) and includes field = value couples.
each couple is sperated by (&).
Express can parse the data from the query string, and populate the object req.query
Some characters, like the percent (%), cannot be in URLs 
and have to be encoded in a different format before you can send them.

app.route(path).get(handler).post(handler)
This syntax allows you to chain different verb handlers on the same path route.


*/
//setup query : suppose we have seprate file users.js which contain array of users objects
//<http://localhost:3000/api/v1/query?search=c&limit=3>
app.get('/api/v1/query',(req,res)=>{
    const {search,limit} = req.query;
    let usersList = [...users];
    if(search){
        usersList = usersList.filter(user => {
            return user.name.startsWith(search.toUpperCase())
        })
    }
    if(limit){
        usersList = usersList.slice(0,Number(limit))
    }
    if(usersList.length<1){
        //we give return here cuz we can not send two responses to the same request
        //it will throw an error
        return res.status(200).json({success:true,data:[]})
    }
    //simply we will send all the users if no conditions above is true;
    res.status(200).json(usersList)
})
