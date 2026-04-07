// 5. Write a program to create a new file and write some content to it in synchronous mode and 
// read and display file contents on standard output in async mod


const http = require('http');
const fs = require('fs');

// Write a program to create a new file and write some content to it in synchronous mode and 
// read and display file contents on standard output in async mode 

let server = http.createServer((req, resp) => {
    //    console.log(req);

    if (req.url == "/") {
        resp.write("hello from server");
        resp.end();
    }

    if (req.method == "GET" && req.url == "/createFile") {

        try {
            fs.writeFileSync("Hello.txt", "hello  world!");
            console.log("File created Successfully!!!");
            resp.write("File Create Successfully!!!");
            resp.end();
        } catch (err) {
            console.log("Error Occured : ", err);
        }
    }

    if (req.method == "GET" && req.url == "/readFile") {
        fs.readFile("Hello.txt", "utf8", (err, data) => {
            console.log(data);
            resp.write("File Read SuccessFully");
            resp.end();
            //  resp.write(data);
            //  resp.end(); 
        });
    }
});

server.listen((3000), () => {
    console.log("Server is running on 3000");
})