// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// While building the HTTP server using http module we make sure that we only put non-blocking requests

// const myServer = http.createServer((req, res) => {
//   if (req.url === '/favicon.ico') {
//     return res.end();
//   }
//   const log = `${Date.now()}: ${req.method} ${req.url} New Request Received \n`;
//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);
//   fs.appendFile("log.txt", log, (err, data) => {
//     // creating multiple page routes 
//     switch(myUrl.pathname) {
//       case "/" : 
//         if (req.method === 'GET') {
//           res.end("Home Page");
//         }
//         break;

//       case "/about" :
//         const username = myUrl.query.myname;
//         res.end(`Hi There! ${username}`);
//         break;

//       case "/contact-me" :
//         res.end("Call me on +91 111-111-1111");
//         break;

//       case "/search" :
//         const search = myUrl.query.search_query;
//         res.end("Here are your search results for " + search);
//         break;

//       case '/signUp' :
//         if (req.method === 'GET') {
//           res.end('Sign-Up page');
//         } else if (req.method === 'POST') {
//           // After querring with the DB
//           res.end('Success');
//         }
//         break;

//       default:
//         res.end("404 NOT FOUND");
//     }
//   });
// });

// myServer.listen(8000, () => console.log('Server Started!'));

// URL : Uniform Resource Locator 
//  https://www.google.com/
// https:// -> Protocol (HyperText Transfer Protocol Secure)
// www.google.com -> Domain-user friendly name of the IP address of server.
// / -> root page

// Difference b/w http and https 
// Request and response in https is encrypted and its secured by ssl.
// Its not there in http. Both are protocols
// IP address of websites are tough to remember so we route the IP to something that is readable
// nested path -> https://www.google.com/cat/img1

// Query Params -> https://www.youtube.com/search_query?javascript+tic+tac+toe
// Query Parameters are also passed along with URL after '?' and multiple params are seperated by '&'
// There is no space in b/w url
// parsing the URL: url module.

// HTTP METHODS:
// HTTP GET: By default browser always makes a GET request
// GET is used to read the data from a server.

// HTTP POST: When we want to send and mutate some data in the server

// GET and POST are the two most common http method

// HTTP PUT: When we want to upload any data on the server we use PUT request

// HTTP PATCH: When we want to update the existing data on the server we use PATCH 

// HTTP DELETE: When we want to delete the data.

// We will have multiple switch conditions to handle multiple page routes.

// It will be highly complex. To overcome this scenario we use the express framework


const http = require('http');
const server = http.createServer((req, res) => {
  const { headers, url, method } = req;
  console.log(headers, url, method);
  res.end();
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));