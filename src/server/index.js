import app from '../api/app';
import dotenv from 'dotenv';
import wakeDyno from 'woke-dyno';
dotenv.config();
// Constants
const PORT = process.env.PORT || 8080;
const Wake = process.env.Wake == 'true';
export default () => {
  app.listen(PORT, () => {
    Wake ? wakeDyno('https://moibot-prod.herokuapp.com/').start() : null;
    console.log(`http://localhost:${PORT}`);
  });
};
