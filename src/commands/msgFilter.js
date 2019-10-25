import config from '../config';
const { bannedWords } = config;
export default moi => {
	moi.on('messageCreate', msg => {
		bannedWords.forEach(word => {
			if (msg.content.includes(word)) {
				msg.delete(`Innapropriate Message:${word}`);
			}
		});
	});
};
