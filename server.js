const { PeerServer } = require('peer');
const http = require('http');

const port = process.env.PORT || 9000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Sky Signaling Server is Alive!\n');
});

const peerServer = PeerServer({ server, path: '/' });

server.listen(port, () => {
  console.log('Sky Signaling Server started on port ' + port);
});
