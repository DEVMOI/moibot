export default function Ping(command) {
	// Place Code Here
	command.registerCommand('ping', 'Pong!!', {
		// Make a ping command
		// Responds with "Pong!" when someone says "!ping"
		description: 'Basic Command to Test if the Bot is Running',
		fullDescription:
			"This command could be used to check if the bot is up. Or entertainment when you're bored."
	});
}
