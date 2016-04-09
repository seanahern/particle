var connect = require('connect'),
    serveStatic = require('serve-static');

console.log("Listening on port 8080...");
connect().use(serveStatic(__dirname)).listen(8080);
