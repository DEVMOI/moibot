import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import wakeDyno from 'woke-dyno';

dotenv.config();

export default function server() {
	const app = express();
	const port = 8000;

	app
		.use(cors())
		.use(express.static(path.join(__dirname, '/../public')))
		.get(/.*/, (req, res) => {
			res.sendFile(__dirname + '/dist/index.html');
		})
		.listen(port, () => {
			console.log(`Server running on: http://localhost:${port}`);

			wakeDyno('https://moi-bot-discord.herokuapp.com/');
		});
}
