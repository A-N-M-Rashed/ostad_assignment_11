const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url === '/') {
        res.end('Welcome to My Node.js Server');
    } else if (req.url === '/about') {
        res.end('This is the About Page');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// starts a simple http server locally on port 5000
server.listen(5000, () => {
    console.log('Server Running at http://localhost:5000');
    console.log('Server Running at http://localhost:5000/about');
});
