import path from 'path';
import fs from 'fs';
import config from '../config';
const commands = '/../commands';
const directoryPath = path.join(__dirname, commands);
export default function addCmd() {
	fs.readdir(directoryPath, (err, files) => {
		if (files) {
			files.forEach(file => {
				// Gets files from commands directory, requires them and passes config to commands
				let fl = file.substring(0, file.length - 3);
				const cmd = require(`../commands/${file}`);
				cmd.default(config);
			});
		}
	});
	config.connect();
}
