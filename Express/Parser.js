
//simple api request from client to add some data:
//we use here axios library
const axios = require('axios')

axios
  .post('https://whatever.com/todos', {
    todo: 'Buy the milk'
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  });
  /*
  in this kind of request the data doesn't appear in the request URL
  it is hidden in request body
  The body is a part of the HTTP request, also called the payload. Even though the data is not
  visible in the URL, this does not mean that it is private. 
  To see why, look at the raw content of an HTTP POST request:
  ******************************
  POST /path/subpath HTTP/1.0
  From: john@example.com
  User-Agent: someBrowser/1.0
  Content-Type: application/x-www-form-urlencoded
  Content-Length: 20
  
  name=John+Doe&age=25
  *******************************
  */
 /*
 there are 3 ways to encoded body in POST requests:
 1-the body is encoded like the query string.(name=John+Doe&age=25)
    This is the default format used by HTML forms. 
 2-With Ajax, you can also use JSON to handle data having a more complex structure.
 3-multipart/form-data: This one is used to upload binary files. 
 in the example down below we will cover the first type[URLencoded body] which is express builtin method
 to allow us to use series of middleware, which can decode data in different formats.
 
 */

const express = require('express');
const app = express();
//parse form data
app.use(express.urlencoded({extended:false}));
//parse json data
app.use(express.json());


//Note: the middleware must be mounted before all the routes which need it.
//Note:extended=false is a configuration option that tells the parser to use the classic encoding. 
/*
POST (sometimes PUT) - Create a new resource using the information sent with the request,
GET - Read an existing resource without modifying it,
PUT or PATCH (sometimes POST) - Update a resource using the data sent,
DELETE => Delete a resource.

*/
//Post handler at '/name' route for post request from client side:
//multi task router handlers:
app.route('/name').get().post((req,res)=>{
  const string = req.body.first + " " +req.body.last;
  res.json({name: string});
  
});
//or single handler on the route '/name'
app.post('/name',(req,res)=>{
  const string = req.body.first + " " + req.body.last;
  res.json({name:string})
})