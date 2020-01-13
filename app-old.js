const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const output = {
        name: 'Tona',
        edad: 30,
        url: req.url
    }
    res.write(JSON.stringify(output));
    // res.write('Hola mundo');
    res.end();
})
.listen(3000);
console.log('escuchando puesto 3000');