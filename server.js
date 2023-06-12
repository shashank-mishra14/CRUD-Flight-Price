const http = require('http');

require('dotenv').config();

const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
    res.end('Hello World');
    }
);


server.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
});