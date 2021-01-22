const http = require('http'); //install http
const app = require('./app');
const server = http.createServer(app);

const PORT = 3000;

server.listen(PORT, (req, res) => {
    console.log('hi')
    console.log('We are operating on 3000');
});
