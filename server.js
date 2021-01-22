const app = require('./app');
const http = require('http'); //install http need to create server
const server = http.createServer(app);

server.listen(PORT, (req, res) => {
    console.log('hi')
    console.log('We are operating on 3000');
});
