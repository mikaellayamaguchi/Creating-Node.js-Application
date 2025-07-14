
const http = require('http');
const url = require('url');


const getHomeMessage = require('./modules/home');
const getAboutMessage = require('./modules/about');
const getContactMessage = require('./modules/contact');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const path = parsedUrl.pathname;
  const name = 'John Smith';

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (path === '/') {
    res.end(`
      <h1>Welcome to my Node.js Application</h1>
      <p>${getHomeMessage(name)}</p>
      <footer><small>Created by Yamaguchi, Mika S. | Date: 2025-07-14 | Section: WD - 302 </small></footer>
    `);

  } else if (path === '/about') {
    res.end(`
      <h2>This is the About Page</h2>
      <p>${getAboutMessage(name)}</p>
      <footer><small>Created by Yamaguchi, Mika S. | Date: 2025-07-14 | Section: WD - 302 </small></footer>
    `);

  } else if (path === '/contact') {
    res.end(`
      <h2>This is the Contact Page</h2>
      <p>${getContactMessage(name)}</p>
      <footer><small>Created by Yamaguchi, Mika S. | Date: 2025-07-14 | Section: WD - 302</small></footer>
    `);

  } else if (path === '/gallery') {
    res.end(`
      <h2>This is the Gallery Page</h2>
      <footer><small>Created by Yamaguchi, Mika S. | Date: 2025-07-14 | Section: WD - 302 </small></footer>
    `);

  } else {
    res.statusCode = 404;
    res.end(`
      <h2>Invalid Request</h2>
      <footer><small>Created by Yamaguchi, Mika S. | Date: 2025-07-14 | Section: WD - 302 </small></footer>
    `);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
