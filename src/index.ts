import express from 'express';
import http from 'http';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import dishRouter from './routes/dishRouter';
import promoRouter from 'routes/promoRouter';
import leaderRouter from 'routes/leaderRouter';

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/dishes', promoRouter);
app.use('/dishes', leaderRouter);

app.use(express.static(__dirname+'/../public'));
app.use((req, res, next) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})
