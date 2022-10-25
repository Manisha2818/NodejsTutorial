const { Console } = require('console');
const http = require('http');

const port = process.env.PORT || 3000;
// console.log(port)

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> This is Manisha </h1> <p> Hey this is the way to rock the world!</p>');
    
})

server.listen(port, ()=>{
    console.log(`server is listning on port ${port}`);
});