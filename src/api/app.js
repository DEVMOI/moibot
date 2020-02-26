import express from 'express';
import cors from 'cors';

const app = express();

app
  .use(cors())
  .use(express.static(__dirname + '/../../public/'))
  .get('/test', (req, res) => {
    res.status(200).send('Hello World!');
  })
  .get('/', (req, res) => {
    res.sendFile(__dirname + '/../../public/index.html');
  });
export default app;
