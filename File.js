const http = require('http');
const fs = require('fs');
const Router = require('router');
const finalhandler = require('finalhandler');

const port = 3000;
const router = Router();

router.get('/', (req, res) => {
  fs.readdir('./assets', (err, files) => {
    if (err) {
      res.statusCode = 500;
      res.end('error happened')
    }
    else {
      res.setHeader('Content-Type', 'application/Json');
      res.end(JSON.stringify(files));
    }
  })
})

router.get('/:fileName', (req, res) => {
  fs.readFile(`./assets/${req.params.fileName}`, (err, fileBuffer) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not found')
    }
    else {
      res.end(fileBuffer);
    }
  })
})


const server = http.createServer((req, res) => {
  router(req, res, finalhandler(req, res));
  // const headers = req;
  // res.statusCode = 200;

});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

