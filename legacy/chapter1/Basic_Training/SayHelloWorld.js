const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello World');
  }
})

server.listen(2000, () => {
  console.log(`YOU'VE BEEN CONNECTED TO PORT 2000`)
});