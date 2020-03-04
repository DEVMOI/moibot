import cheerio from 'cheerio';
import { fetchMoi } from '../../util';

/**
 *
 * @param {*} moi // Used to init bot commands
 */
export default moi => {
  moi.registerCommand(
    '$',
    msg => {
      let stockSymbol = msg.content.toUpperCase().replace('()$ ', '');
      fetchMoi(`https://robinhood.com/stocks/${stockSymbol}`)
        .then(res => {
          let $ = cheerio.load(res.body, {
            normalizeWhitespace: true,
          });
          console.log(
            $('.main-container')
              .children()
              .text().length > 0
          );
          if (
            $('.main-container')
              .children()
              .text().length > 0
          ) {
            console.log(
              $('.main-container')
                .children()
                .first()
                .text()
            );

            let toCode = '```';
            moi.createMessage(
              msg.channel.id,
              `${statusMessage +
                toCode +
                $('.main-container')
                  .children()
                  .first()
                  .text() +
                toCode}`
            );
          } else {
            moi.createMessage(msg.channel.id, `Stock Not Found`);
          }
        })
        .catch(err => {
          if (err.isAxiosError) {
            moi.createMessage(msg.channel.id, `Stock Not Found`);
          }
        });
    },
    {
      description: 'Searches Robinhood for Stock Information',
      fullDescription: 'Searches Robinhood for Stock Information',
    }
  );

  //Robinhood Status
  moi.registerCommand(
    '$tatus',
    msg => {
      let statusString;
      let statusMessage = `Robinhood Status: https://status.robinhood.com/ \n`;

      fetchMoi(`https://status.robinhood.com/`)
        .then(res => {
          let $ = cheerio.load(res.body, {
            normalizeWhitespace: true,
          });

          return $('.unresolved-incidents')
            .children()
            .text()
            .replace(/(robinhood.com)/g, '')
            .replace(
              /(In the meantime, please use https:|contact as the best way to reach us. |Subscribe to Incident|Subscribe to updates for Email Support Issue via .|        × *)/g,
              ''
            )
            .replace(/       \s+/g, '\n')
            .replace('///contact as the best way to reach us.', '');
        })
        .then(e => {
          var rss;
          fetchMoi(`https://status.robinhood.com/history.rss`)
            .then(res => {
              let $ = cheerio.load(res.body, {
                normalizeWhitespace: true,
                xmlMode: true,
              });
              rss = $('channel')
                .children()
                .text();
              let status = e;
              return status;
            })
            .then(status => {
              let toCode = '```';
              status = status;
              // console.log(status.length, status.substring(0, 50));
              moi.createMessage(
                msg.channel.id,
                `${statusMessage + toCode + status.substring(0, 1000) + toCode}`
              );
            });
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

// let toCode = '```';
// moi.createMessage(
//   msg.channel.id,
//   `${statusMessage +
//     toCode +
//     $('.updates')
//       .children()
//       .text()
//       .replace(/       \s+/g, '\n') +
//     toCode}`
// );
// .replace(/       \s+/g, '\n')