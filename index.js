import { createBareServer } from '@tomphttp/bare-server-node';
import express from 'express';
import http from 'node:http';

const app = express();
const bare = createBareServer("/bare/");
const server = http.createServer();
const PORT = 8080;



app.use(express.static("static"));
app.use(express.static("img"));

app.get('*', function(req, res) {
	res.send('404: Not Found');
});

server.on("request", (req, res) => {
    if (bare.shouldRoute(req)) {
        bare.routeRequest(req, res);
    } else {
        app(req, res);
    }
});


// Ik theres a way to not hardcode ports but Idgaf
server.on("listening", () => {
    console.log('Listening on 8080');
});

process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {    
        console.log('HTTP server closed');
    });
});

server.listen({ port: PORT }, () => {});


app.use((req, res, next) => {
    console.log(`Received request for: ${req.url}`);
    next();
});
