import http from 'http';

const server = http.createServer((req,res)=>{
    res.write('great job task is done!!')
    res.end();
})

server.listen(5000,()=>console.log("server is up now!!"));