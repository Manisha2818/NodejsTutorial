const { Console } = require('console');
const http = require('http');

const port = process.env.PORT || 3000;
// console.log(port)

const server = http.createServer((req, res)=>{
   
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)

    if(req.url == '/'){
        // res.manisha();
        res.statusCode = 200;
        res.end('<h1> This is Manisha </h1> <p> Hey this is the way to rock the world!</p>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> About Manisha </h1> <p> Hey this is about manisha</p>');
    }
    else{
        res.statusCode = 404;
        res.end('<h1>Pagr not found </h1> <p> Hey this Page is unavailable</p>');
    }
    
})

server.listen(port, ()=>{
    console.log(`server is listning on port ${port}`);
});