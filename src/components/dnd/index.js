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
      let query = msg.content.replace(msg.prefix + 'dnd ', '').split(' ');
      console.log(msg.prefix);
      if (query[0] == 'class' || query[0] == 'classes') {
        query[0] == 'class' ? (query[0] = 'classes') : null;
        fetchMoi(`https://www.dnd5eapi.co/api/${query[0]}/${query[1]}`)
          .then(res => {
            const data = JSON.parse(res.body);
            const {
              name,
              hit_die,
              proficiency_choices,
              proficiencies,
              saving_throws,
              starting_equipment,
              class_levels,
              subclasses,
              spellcasting,
            } = data;
            let toCode = '```';

            function getArray(array) {
              let arr = [];
              array.forEach(prof => {
                arr.push('-' + prof.name + ' ');
              });
              return arr.join('\r\n');
            }
            const result =
              toCode +
              'Class Info:\r\n_______________\r\n\r\n' +
              `Name: ${name}\r\n` +
              `Hit Die: ${hit_die}\r\n\r\n` +
              `Skill Choices: ${proficiency_choices[0].choose}\r\n` +
              getArray(proficiency_choices[0].from) +
              '\r\n\r\n' +
              'Proficiencies:\r\n' +
              getArray(proficiencies) +
              '\r\n\r\n' +
              'Saving Throws:\r\n' +
              getArray(saving_throws) +
              toCode;
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
