import path from 'path';
import fs from 'fs';
import config from '../config';
const { moiBot } = config;
export default function Core() {
	fs.readdir(path.join(__dirname, '/../commands'), (err, files) => {
		if (files) {
			files.forEach(file => {
				// Gets files from commands directory, and inits
				require(`../commands/${file}`).default(moiBot);
			});
		} else {
			console.log('Files Not Found...');
		}
	});
	moiBot.connect();
}
