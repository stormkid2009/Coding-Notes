const http = require('http');

const server = http.createServer((req,res)=>{
    let url = req.url;
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>this is home page</h1>')
        res.end();
    }
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>this is about page</h1>')
        res.end();
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>this page not found</h1>')
        res.end();
    }
    
})

server.listen(5000,()=>console.log("server is up now!!"));