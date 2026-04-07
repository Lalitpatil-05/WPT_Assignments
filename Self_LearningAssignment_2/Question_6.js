
const http = require('http');
const url = require('url');
//   Build asimple Node.js web application serving both HTTP GET and POST methods
let server = http.createServer((req,resp)=>{


  if(req.method == "GET"  && req.url == "/"){
   resp.write("Welcome on Home Page");
   resp.end();
  } 
 
  if(req.method == "POST" && req.url == "/postData" ){
    resp.write("request get successfully!!!!");
    resp.end();  
}
})

server.listen(3000,()=>{
    console.log("Server is running at 3000");
})