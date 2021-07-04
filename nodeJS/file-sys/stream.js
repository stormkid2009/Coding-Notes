//to read/write  big files we use stream because variable will consume alot of memory
//remember:
//const first = readFile bla bla......
//there 4 kinds of stream :
//write - read -duplex(for read and write) - transform(to modify data while reading or writing)
//stream extends event class
//we will make big.txt file:
//createReadStream(path,{highwatermark[size of chunks we read],encoding})
const {createReadStream} = require('fs');
const stream = createReadStream('./content/big.txt',{highWaterMark:5000,encoding:'utf-8'});

stream.on('data',(result)=>{
    console.log(result);
})
stream.on('error',(err)=>{
    console.log(err)
})