import { createQuery } from '../../util';
import classSearch from './classSearch';

/**
 *
 * @param {*} moi // Used to init bot commands
 */
export default moi => {
  moi.registerCommand(
    'dnd',
    msg => {
      let query = createQuery(msg.content, msg.prefix + 'dnd ');
      let payload = { moi, msg, query };
      if (query[0] == 'class' || query[0] == 'classes') {
        classSearch(payload);
      }
    },
    {
      description: 'D&D Search',
      fullDescription: 'Gets D&D Information',
    }
  );
};
