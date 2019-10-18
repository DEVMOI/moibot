import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import wakeDyno from 'woke-dyno';

dotenv.config();

export default function server(bot) {
	const app = express();
	const port = 8000;

	app.use(cors());
	app
		.use(express.static(__dirname + '/../public'))
		.get(/.*/, (req, res) => {
			res.sendFile(__dirname + '/../public/index.html');
		})
		.listen(port, () => {
			bot()
			wakeDyno('https://moi-bot-discord.herokuapp.com/');
			console.log(`http://localhost:${port}`)
		});
}
