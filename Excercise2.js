/*
Create a web server that's going to send a response of big image (bigger then 3MB) 
to any client that sends a request to your specified server:port. Use the best way for performance.
 (Try to solve this in many different ways and inspect the loading time in the browser and send many requests to see the performance differences)
 */
 const http = require('http');
 const fs = require('fs');
 
 const server = http.createServer();
 
 server.on('request', function (req, res) {
     res.writeHead(200, { 'Content-Type': 'image/jpeg' });
     let image = fs.readFileSync('./tiles.jpg');
     res.end(image, 'binary');
 });
 
 server.listen(3000);



 //2nd way

 const fs = require('fs');
const server = require('http').createServer();

server.on('request', (request, response) => {
    fs.readFile('./tiles.jpg', (err, data) => {
        if (err) throw err;
        response.end(data);
    });
});

server.listen(3000);

// 3rd way
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => { 
    fs.createReadStream("./tiles.jpg").pipe(res);
});

server.listen(3000);

//4th way

require('http').createServer((req, res) => {
    const img = require('fs').createReadStream('./tiles.jpg');
    img.pipe(res);
}).listen(9090, () => console.log("listening to 9090"));

