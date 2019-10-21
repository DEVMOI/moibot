export default function msgFilter(command) {
	const bannedWords = ['nerd', 'geek', 'spoiler'];
	command.on('messageCreate', msg => {
		bannedWords.forEach(word => {
			if (msg.content === word) {
				msg.delete('Innapropriate Message');
				// createMessage(msg.channel.id, 'Pong!');
			}
		});
	});
}
