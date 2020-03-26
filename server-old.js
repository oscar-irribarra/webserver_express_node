const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const data = {
      nombre: 'oscar',
      edad: 24,
      url: req.url
    };

    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(8080);

console.log('escuchando puerto 8080.....');
