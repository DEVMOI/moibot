import path from 'path';
import fs from 'fs';
import config from './config';
const { init } = config;
export default () => {
  fs.readdir(path.join(__dirname, '/components'), (err, files) => {
    if (files) {
      files.forEach(file => {
        // Mounts commnds
        require(`./components/${file}`).default(init);
      });
    } else {
      console.log('Component Not Found...');
    }
  });
  init.connect();
};
