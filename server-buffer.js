//for create server 

const http = require('http');
const fs = require('fs')


const { buffer } = require('stream/consumers')

//creating  a sever using row node.js 

const server = http.createServer()

//listener 

server.on('request',(req,res)=>{
  if(req.url ==='/read-only'   && req.method  === 'GET'){
    //streaming file reading 

    const readableStream = fs.createReadStream(__dirname+'/Text/write.txt')
    // proceesc.swt()
  
    readableStream.on('data',(buffer)=>{
      res.statusCode = 200;
      res.write(buffer)
    })

    readableStream.on('end',()=>{
      res.statusCode = 200;
      res.end('hello from world')
    })
    // res.end('Hello from world')
    readableStream.on ('error',(err)=>{
      console.log(err)
      res.statusCode = 500;
      res.end('The stream is over');
    })
  }

})

server.listen(5000,()=>{
  console.log('server is listening on port 5000')
})