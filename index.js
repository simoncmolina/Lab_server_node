const http = require('http');
const chalk = require('chalk');
const host = '127.0.0.1';
const port = '8000';

let server = http.createServer(function(call, response){
    response.writeHead(200, {'Content-Type' : 'application/json'});
    response.end(JSON.stringify({
        "nombre":"Simón",
        "mensaje":"Hola Simón"
    }));
});

server.listen(port, host, function(){
    console.log(chalk.green('Server running: ' + host + ':' + port));
})