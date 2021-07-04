const { readFile, writeFile } = require('fs').promises;
//readFile method(path,unicoe,callback function);
const start = async()=>{
    try {
        const first = await readFile('./content/first.txt','utf-8');
        const second = await readFile('./content/second.txt','utf-8');
        await writeFile('./content/promise.txt',`
        now we can practice what we have learned here`,{flag:'a'});
        console.log(first,second);
    } catch (error) {
       console.log(error); 
    }
}

start();
