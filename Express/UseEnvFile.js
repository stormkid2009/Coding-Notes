//use .env file
 /*
 .env file is a hidden file that is used to pass environment variables to your application
 we use to store data which we need to be private or hidden like :
 (API keys from external services , your database URI,configuration options)

 process.env.VAR_NAME >> variables name is always capital and we don't need quotes
 */

 /*
The environment variables are accessible from the app as process.env.VAR_NAME. 
The process.env object is a global Node object, and variables are passed as strings. 
By convention, the variable names are all uppercase, with words separated by an underscore. 
The .env is a shell file, so you don’t need to wrap names or values in quotes. 
It is also important to note that there cannot be space around the equals sign 
when you are assigning values to your variables, e.g. VAR_NAME=value. 
Usually, you will put each variable definition on a separate line.

*/

app.get("/json",(req,res)=>{
    let data = {"message":"Hello Json"}
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        data.message = data.message.toUpperCase();
    }
    res.json(data);
});