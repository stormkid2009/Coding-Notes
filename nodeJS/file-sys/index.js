const { readFile, writeFile } = require('fs');
//readFile method(path,unicoe,callback function);
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        return null;
    }
    const first =result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            return;
        }
        const second = result;
        writeFile('./content/result-async',`this is async method to test ${first}<>${second}`,(err,result)=>{
            if(err){
                return;
            }
            console.log(result);
        })
    })
})