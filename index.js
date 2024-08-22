import { createBareServer } from '@tomphttp/bare-server-node';
import express from 'express';
import http from 'node:http';

const app = express();
const bare = createBareServer("/bare/");
const server = http.createServer();
const PORT = 8080;
function setupServer() {
  app.use(express.static("static"))
  app.use(express.static("img"))
  app.get('*', function(req, res) {res.send("404: not found")})
  server.on("request", (req, res) => {
    if (bare.shouldRoute(req)) {
      bare.routeRequest(req, res)
    } else {
      app(req, res)
    }
  })
  server.listen({port: PORT}, () => {})
}
try {

setupServer()

}
catch (e) {
  setupServer()
}
