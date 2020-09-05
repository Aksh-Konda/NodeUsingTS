import http from 'http';
import fs from 'fs';
import path from 'path';

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('Request for', req.url, 'by method', req.method);

    if(req.method == 'GET') {
        var fileUrl = req.url;
        if(fileUrl == '/') fileUrl = '/index.html';

        var filePath = path.resolve('./public'+fileUrl);
        const fileExt = path.extname(filePath);
        if(fileExt == '.html') {
            fs.exists(filePath, (exists) => {
                if(exists) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    fs.createReadStream(filePath).pipe(res);
                }
                else {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1>Error 404: </h1><h3>' + fileUrl +
                        ' not found</h3></body></html>');
                }
            });
        }
        else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404: </h1><h3>' + fileUrl + 
                ' not an HTML file</h3></body></html>');
        }
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: </h1><h3>' + req.method + 
            ' not supported</h3></body></html>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});