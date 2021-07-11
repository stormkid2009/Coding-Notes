const fs= require('fs');

module.exports = function(path,data){
    fs.readFile(path,'utf-8',(err,result)=>{
        if(err){
            console.log(err)
        }
        //transform result to valid javascript object
        result = JSON.parse(result);
        //adding new data to the array
        result = [...result,data];
        //transform the array to valid json
        let finish = JSON.stringify(result,null,2);
        fs.writeFile(path,finish,(err)=>{
            if(err){
                console.log(err);
            }
        })
        
    })

}