import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import wakeDyno from 'woke-dyno';

dotenv.config();

// Constants
const PORT = 8080;
export default function server(bot) {
	const app = express();

	app.use(cors());
	app.get('/', (req, res) => {
		console.log('kappa')
		res.send('Hello World!');
	});
	// .use(express.static(__dirname + '/../public/'))
	// .get(/.*/, (req, res) => {
	// 	res.sendFile(__dirname + '/../public/index.html');
	// })
	app.listen(PORT,() => {
		// bot()
		wakeDyno('https://moi-bot-discord.herokuapp.com/');
	});
	console.log(`http://localhost:${PORT}`);
}
