// const fs = require('fs');

// const filename = "exapmle.txt";
// const content = "Hello.I am writing this file in synchronous way...";

// try{
//     fs.writeFileSync(filename,content);
//     console.log("File Write Successfully.");
    
// }catch(error){
//     console.error("Error",error);
    
// }

// fs.readFile(filename,"utf-8",(err,data)=>{
//     if(err){
//         console.err("Error reading file");
//         return
//     }

//     console.log("File read (Async mode)");
//     console.log(data);
    
    
// })

const { log } = require('console');
const fs = require('fs');

const filename = "example.txt"
const content = "Hello I am writing this file in synchronous way..."

try{
    fs.writeFileSync(filename,content);
    console.log("File Write Successfuly");
    
}catch(err){
    console.err("Error".err);
    
}

fs.readFile(filename,"utf8",(err,data)=>{
    if(err){
        console.err("Error file reading");
        return
    }

    console.log("File read (Async mode)");
    console.log(data);
    
    
})