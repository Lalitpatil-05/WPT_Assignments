const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {

    if (req.method === "GET") {
        // Send HTML form
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`
            <h2>Simple Form</h2>
            <form method="POST">
                Name: <input type="text" name="name"><br><br>
                Email: <input type="email" name="email"><br><br>
                <button type="submit">Submit</button>
            </form>
        `);
        res.end();
    }

    else if (req.method === "POST") {
        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const data = querystring.parse(body);

            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(`
                <h2>Form Submitted</h2>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <a href="/">Go Back</a>
            `);
            res.end();
        });
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});