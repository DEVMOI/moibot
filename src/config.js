import Eris from 'eris';
const config = new Eris.CommandClient(
	process.env.BOT_TOKEN,
	{},
	{
		description: 'A Bot For the People',
		owner: '@Moikune || https://moisite.herokuapp.com',
		prefix: process.env.prefix
	}
);
export default config;
