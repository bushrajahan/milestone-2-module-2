const fs = require('fs')

//reading text asyncrounously 

fs.readFile('./Text/write.txt','utf-8',(err,data)=>{
  if(err){
    throw Error('Error reading text')
  }
  console.log(data)



//reading text asyncronously 

fs.writeFile('./Text/write.txt',data,'utf-8',(err)=>{
  if(err){
    throw Error('Error writing file')
  }

})
})