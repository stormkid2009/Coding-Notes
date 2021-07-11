const fs= require('fs');

module.exports = function(path,user){
    fs.readFile(path,'utf-8',(err,result)=>{
        if(err){
            console.log(err)
        }
        //transform result to valid javascript object
        result = JSON.parse(result);
        //removing the user from  the array
        result = result.filter(item => item.name !== user.name);
        //transform the array to a valid json
        //we use null,2 to format json with white spaces to easy read
        let finish = JSON.stringify(result,null,2);
        fs.writeFile(path,finish,(err)=>{
            if(err){
                console.log(err);
            }
        })
        
    })

}