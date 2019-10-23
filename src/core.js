import path from 'path';
import fs from 'fs';
import config from './config';
const { init } = config;
export default () => {
	fs.readdir(path.join(__dirname, '/commands'), (err, files) => {
		if (files) {
			files.forEach(file => {
				// Mounts commnds
				require(`./commands/${file}`).default(init);
			});
		} else {
			console.log('Commands Not Found...');
		}
	});
	init.connect();
};
