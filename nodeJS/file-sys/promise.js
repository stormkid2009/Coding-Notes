const { readFile, writeFile } = require('fs');
const { resolve } = require('path');
//readFile method(path,unicoe,callback function);
const getData =(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
//with correct path to check data
getData('./content/first.txt')
.then(result=> console.log(result))
.catch(err=>console.log(err));
//with wrong path to check the error
getData('../content/first.txt')
.then(result=> console.log(result))
.catch(err=>console.log(err));