import server from './server';
import config from './config';
// Bot Commands
import {init,help} from'./commands'

// Add imported Commands to Array
const __commands = [init,help]
// MoiBot Server
server(()=>{
	__commands.forEach((command)=>{
		command(config)
	})
	config.connect();

})