/* "Get Route Parameter Input from the Client" 
    when building API we need to let the client side know
    how to get the information He needs by using Route params
    Route parameters named segments of the URL delimited by slashes (/)
    Each segment captures the value of the part of the URL which matches its position. 
    The captured values can be found in the req.params object.

    *************************
    route_path: '/user/:userId/book/:bookId'
    actual_request_URL: '/user/546/book/6754'
    req.params: {userId: '546', bookId: '6754'}
    **************************

*/

//setup new route with params (we gonna use id here)

app.get('/api/users/:userID',(req,res)=>{
    const {userID} = req.params;
    const oneUser = users.find(user => user.id===Number(userID))
    if(!oneUser){
        return res.status(404).json(`user doesn't exist!!`)
    }
    return res.json(oneUser)
})

//In order to get route parameters from a POST request, the general format is as follows:
app.post("/:param1/:param2", (req, res) => {
    // Access the corresponding key in the req.params
    // object as defined in the endpoint
    var param1 = req.params.param1;
    // OR use destructuring to get multiple parameters
    var { param1, param2 } = req.params;
    // Send the req.params object as a JSON Response
    res.json(req.params);
  });

  //setup more complex api route
app.get('/api/users/:userID/address/:street',(req,res)=>{
    console.log(req.params);
    res.send(`fetched successfully`)
})