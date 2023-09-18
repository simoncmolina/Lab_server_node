const http = require('http');
const chalk = require('chalk');
const host = '127.0.0.1';
const port = '8000';

let server = http.createServer(function(call, response){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end({
        "nombre":"Simón",
        "mensaje":"Estamos conduciendo una buena estrategia"
    });
});

server.listen(port, host, function(){
    console.log('Server running: ' + host + ':' + port);
})