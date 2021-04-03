/* serving json file by
creating API to get data from json file*/
app.get("your-app-url/json",(req,res)=>{
    res.json({"message": "Hello json"})
});