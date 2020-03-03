import { fetchMoi } from '../../util';

/**
 *
 * @param {*} moi // Used to init bot commands
 */
export default moi => {
  //Robinhood Status
  moi.registerCommand(
    'dnd',
    msg => {
      let query = msg.content.replace('()dnd ', '').split(' ');
      if (query[0].includes('class')) {
        fetchMoi(`http://www.dnd5eapi.co/api/${query[0]}/${query[1]}`)
          .then(res => {
            const data = JSON.parse(res.body);
            // console.log(data);
            const { name, hit_die, proficiency_choices } = data;
            let toCode = '```';

            const result =
              toCode +
              'Class Info:\r\n\r\n' +
              `Name: ${name}` +
              '\r\n' +
              `Hit Die: ${hit_die}` +
              '\r\n' +
              `proficiency_choices: ${proficiency_choices[0].choose}` +
              '\r\n' +
              `-` +
              (() => {
                proficiency_choices[0].choose;
              })() +
              '\r\n' +
              toCode;
            console.log(result);
            moi.createMessage(msg.channel.id, result);
          })
          .catch(err => {
            if (err.isAxiosError) {
              moi.createMessage(msg.channel.id, `Status Site Down`);
            }
          });
      }
    },
    {
      description: 'D&D Search',
      fullDescription: 'Gets D&D Information',
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
