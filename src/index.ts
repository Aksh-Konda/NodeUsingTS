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
                    fillStatus404(res, fileUrl + ' not found');
                }
            });
        }
        else {
            fillStatus404(res, fileUrl + ' not an HTML file');
        }
    }
    else {
        fillStatus404(res, req.method + ' not supported');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

function fillStatus404(res: http.ServerResponse, err: string) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Error 404: </h1><h3>' + err + '</h3></body></html>');
}