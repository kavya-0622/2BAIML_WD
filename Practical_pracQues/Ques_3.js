const fs = require('fs')
fs.writeFile("student.txt","Name: Kavya",(err)=>{
    if(err){
        console.log(err)
    } else{
        console.log("File Created")
    }
})


fs.readFile('student.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
    } else{
        console.log(data)
    }
})

