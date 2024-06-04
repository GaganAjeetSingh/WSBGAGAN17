

const http = require('http');

http.createServer((req,Res)=>{

    console.log(req)
    Res.end("hello gagan singh bhati")

}).listen(4500);
console.log('node ')