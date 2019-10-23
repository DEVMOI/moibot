import Eris from 'eris';
export default {
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
// export default config;
