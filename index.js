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

server.listen({ port: PORT }, () => {});