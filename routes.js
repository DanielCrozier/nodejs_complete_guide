const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write(`
<!DOCTYPE html>
<html lang="en-US">
   <head><title>Enter Message</title></head>
   <body>
      <form action="/message" method="POST">
        <input type="text" name="message"><button type="submit">Send</button>
      </form>
   </body>   
</html>
  `);
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = decodeURIComponent(Buffer.concat(body).toString());
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write(`
<!DOCTYPE html>
<html lang="en-US">
   <head><title>My First NodeJS Page</title></head>
   <body><h1>Hello from NODEJS-COMPLETE-GUIDE!</h1></body>   
</html>
  `);
    res.end();
};

// module.exports = {
//     handler: requestHandler,
//     someText: 'My First NodeJS App',
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'My First NodeJS App';

exports.handler = requestHandler;
exports.someText = 'My First NodeJS App';