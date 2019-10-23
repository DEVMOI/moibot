import Eris from 'eris';
const config = {
	init: new Eris.CommandClient(
		process.env.BOT_TOKEN,
		{},
		{
			description: 'A Bot For the People',
			owner: '@Moikune || https://moisite.herokuapp.com',
			prefix: process.env.prefix
		}
	),
	bannedWords: []
};
export default config;
