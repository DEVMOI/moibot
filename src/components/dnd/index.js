import { fetchMoi, toCapitalize, toCode } from '../../util';

/**
 *
 * @param {*} moi // Used to init bot commands
 */
export default moi => {
  moi.registerCommand(
    'dnd',
    msg => {
      let query = msg.content.replace(msg.prefix + 'dnd ', '').split(' ');
      // console.log(query)
      if (query[0] == 'class' || query[0] == 'classes') {
        fetchMoi(`https://api.open5e.com/classes/`)
          .then(res => {
            const data = JSON.parse(res.body);

            let Class;
            let levelTable = `~ Proficiencies ~\r\n`;

            data.results.forEach(cls => {
              cls.name == toCapitalize(query[1]) ? (Class = cls) : null;
            });
            const {
              name,
              desc,
              hit_dice,
              hp_at_1st_level,
              hp_at_higher_levels,
              prof_armor,
              prof_weapons,
              prof_tools,
              prof_saving_throws,
              prof_skills,
              equipment,
              table,
              spellcasting_ability,
              subtypes_name,
              archetypes,
            } = Class;
            // console.log(Class);
            const result =
              `~ ${name} Information ~\r\n\r\n` +
              `~ Hit Points ~\r\n` +
              `Hit Dice: ${hit_dice}\r\n` +
              `Hit Points at 1st Level: ${hp_at_1st_level}\r\n` +
              `Hit Points at Higher Levels: ${hp_at_higher_levels}\r\n\r\n` +
              `~ Proficiencies ~\r\n` +
              `Armor: ${toCapitalize(prof_armor)}\r\n` +
              `Weapons: ${toCapitalize(prof_weapons)}\r\n` +
              `Tools: ${toCapitalize(prof_tools)}\r\n` +
              `Saving Throws: ${toCapitalize(prof_saving_throws)}\r\n` +
              `Skills: ${prof_skills}\r\n\r\n` +
              `~ Equipment ~\r\n` +
              `${equipment}\r\n`;

            moi.createMessage(msg.channel.id, toCode(result));

            const handleClassTable = table => {
              if (table.length <= 2000) {
                moi.createMessage(msg.channel.id, toCode(table));
              }
              if (name == 'Bard') {
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(0, 1882))
                );
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(1882, 3762))
                );
              }
              if (name == 'Cleric') {
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(0, 1935))
                );

                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(1935, 3870))
                );
              }
              if (name == 'Druid') {
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(0, 1232))
                );
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(1232, 2155))
                );
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(2155, 3387))
                );
              }
              if (name == 'Monk') {
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(0, 1299 + 260))
                );
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(1299 + 260, 2858))
                );
              }
              if (name == 'Paladin') {
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(0, 1272))
                );
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(1272, 2330))
                );
              }
              if (name == 'Ranger') {
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(0, 1272 + 7 + 255))
                );
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(1272 + 7 + 256, 2815))
                );
              }
              if (name == 'Sorcerer') {
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(0, 1272 + 7 + 257 + 132))
                );
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(1272 + 7 + 257 + 133, 2815 + 23))
                );
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(2815 + 23, 3672))
                );
              }
              if (name == 'Warlock') {
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(0, 1668 + 58))
                );
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(1688 + 39, 3166))
                );
              }
              if (name == 'Wizard') {
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(0, 1668 + 58 + 27))
                );
                moi.createMessage(
                  msg.channel.id,
                  toCode(table.substring(1688 + 39 + 27, 2968))
                );
              }
              console.log(table.length);
            };
            handleClassTable(table);
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
