const http = require("http");

const server = http.createServer((req, res) => {
  console.log("req", req);
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } 
   if (req.url === "/about") {
    res.end("Here is our short history");
  }
//   res.write("Welcome to home page");
  res.end(`
   <h1>Oops!</h1>
   <p>We can't seem to find the page you are looking for</p>
   <a href="/">back home</a>
  `);
});

server.listen(5000);
