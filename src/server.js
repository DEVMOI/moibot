import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import wakeDyno from 'woke-dyno';

dotenv.config();

// Constants
const PORT = process.env.PORT || 8080;
const Wake = process.env.Wake == 'true';
export default function server(moiBot) {
	const app = express();

	app
		.use(cors())
		.use(express.static(__dirname + '/../public/'))
		.get(/.*/, (req, res) => {
			res.sendFile(__dirname + '/../public/index.html');
		});
	app.listen(PORT, () => {
		moiBot();

		if (Wake) {
			wakeDyno('https://moibot-prod.herokuapp.com/').start();
		}
	});
	console.log(`http://localhost:${PORT}`);
}
