import express from 'express';
const app = express();
app
	// .use(express.static(__dirname + '/../public/'))
	.get('/', (req, res) => {
		res.status(200).send('Hello World!');
		// res.sendFile(__dirname + '/../public/index.html');
	});
export default app;
