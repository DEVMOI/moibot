import cheerio from 'cheerio';
import axios from 'axios';

/**
 *
 * @param {*} moi // Used to init bot commands
 */
export default moi => {
  moi.registerCommand(
    '$',
    msg => {
      let stockSymbol = msg.content.replace('()$ ', '');
      stockSymbol = stockSymbol.toUpperCase();
      axios
        .get(`robinhood.com/stocks/${stockSymbol}`)
        .then(res => {
          console.log(res.status);
        })
        .catch(err => {
          if (err.isAxiosError) {
            moi.createMessage(msg.channel.id, `Stock Not Found`);
          }
        });
    },
    {
      description: 'Searches Anilist for Manga',
      fullDescription:
        "This command could be used to check if the bot is up. Or entertainment when you're bored.",
    }
  );

  //Robinhood Status
  moi.registerCommand(
    '$tatus',
    msg => {
      let statusMessage = `Robinhood Status: https://status.robinhood.com/ \n`;
      axios
        .get(`https://status.robinhood.com/`)
        .then(res => {
          let $ = cheerio.load(res.data, {
            normalizeWhitespace: false,
          });
          let toCode = '```';
          moi.createMessage(
            msg.channel.id,
            `${statusMessage +
              toCode +
              $('.updates')
                .children()
                .text()
                .replace(/       \s+/g, '\n') +
              toCode}`
          );
        })
        .catch(err => {
          if (err.isAxiosError) {
            moi.createMessage(msg.channel.id, `Status Site Down`);
          }
        });
    },
    {
      description: 'Robinhood Status',
      fullDescription: 'Gets the Status of ',
    }
  );
};
