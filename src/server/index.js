import app from './app';
import dotenv from 'dotenv';
import wakeDyno from 'woke-dyno';
dotenv.config();
// Constants
const PORT = process.env.PORT || 8080;
const Wake = process.env.Wake == 'true';

export default app => {
	app.listen(PORT, () => {
		if (Wake) {
			wakeDyno('https://moibot-prod.herokuapp.com/').start();
		}
	});
	console.log(`http://localhost:${PORT}`);
};
