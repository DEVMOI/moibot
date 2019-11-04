import express from 'express';
const app = express();
app
.get('/', (req, res) => {
  res.status(200).send('Hello World!');
  // res.sendFile(__dirname + '/../public/index.html');
});
// .use(express.static(__dirname + '/../public/'))
export default app;
