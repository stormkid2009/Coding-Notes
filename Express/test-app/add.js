const fs= require('fs');
//helper function to add data to our json file
module.exports = function(path,data){
    fs.readFile(path,'utf-8',(err,result)=>{
        if(err){
            console.log(err)
        }
        //transform result to valid javascript object
        result = JSON.parse(result);
        //adding new data to the array
        result = [...result,data];
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