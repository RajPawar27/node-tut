const { log } = require("console");
const http = require("http");

const server = http.createServer(
    (req,res)=>{
        res.write('Welcome to the server. ');
        res.end();
    }
);

server.listen(3000);
