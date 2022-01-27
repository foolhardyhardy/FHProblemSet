const http = require('http');
const fs = require('fs');
const appPage = fs.readFileSync('solution.html');

let records = [];
let total = 0;

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === "/") {
        res.end(appPage);
    } else if(req.method === "GET" && req.url === "/update") {
        if(records.length === 0) {
            res.end(JSON.stringify({"last": null, "total": total}));
        } else {
            res.end(JSON.stringify({"last": records[records.length-1], "total": total}));
        }
    } else if(req.method === "POST" && req.url === "/update") {
        let body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        }).on("end", () => {
            body = JSON.parse(Buffer.concat(body).toString());
            records.push(body["latest"]);
            total += body["latest"];
            res.end(JSON.stringify({"last": records[records.length-1], "total": total}));
        })
    }
});

server.listen(3000);