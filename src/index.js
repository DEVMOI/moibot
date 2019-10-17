import server from './server';
import config from './config';

const cmd = config;

cmd.on('ready', () => {
	// When the bot is ready
	console.log('Ready!'); // Log "Ready!"
	server();

});

cmd.registerCommandAlias('halp', 'help'); // Alias !halp to !help

cmd.registerCommand('poke', [''], {
	// Make a ping command
	// Responds with "Pong!" when someone says "!ping"
	description: 'Pong!',
	fullDescription:
		"This command could be used to check if the bot is up. Or entertainment when you're bored."
});

cmd.connect();
