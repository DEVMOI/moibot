import axios from 'axios';
import { moiBreak, toCapitalize } from '../../util';
const query = `
			query ($id: Int, $page: Int, $perPage: Int, $chapters: Int, $search: String) {
				Page(page: $page, perPage: $perPage) {

					media(id: $id, search: $search, chapters: $chapters, type: MANGA, format: MANGA) {
						id
						title {
							romaji
							english
							native
						}
						format
						chapters
						volumes
						genres
						averageScore
						popularity
						
					}
				}
			}
			`;
const variables = {
  search: '',
};
export default (moi, msg) => {
  let clean = (variables.search = toCapitalize(
    msg.content.replace(`${msg.prefix}manga `, '')
  ));

  clean = msg;
  axios
    .post('https://graphql.anilist.co', {
      query,
      variables,
    })
    .then(response => {
      let moititle;
      let isFound = false;
      const toCode = '```';
      const { media } = response.data.data.Page;
      media.forEach(item => {
        let {
          nameCheck,
          title,
          format,
          chapters,
          volumes,
          genres,
          averageScore,
          popularity,
        } = item;
        const { english, romaji } = title;

        if (english !== null) {
          nameCheck = english.includes(clean);
          moititle = english;
        } else {
          nameCheck = romaji.includes(clean);
          moititle = romaji;
        }

        if (!nameCheck) {
          if (isFound) {
            moiBreak(`Found`);
          }
          moi.createMessage(msg.channel.id, `Not Found`);
          moiBreak(`Not Found`);
        }

        isFound = true;

        const message = `
				${toCode}\n${moititle}\n${format}\nChapters: ${chapters}\nVolumes: ${volumes}\nGenre: ${genres}\nScore: ${averageScore}\nPopularity: ${popularity}\n${toCode}`;
        /**
         * Creates a message for the
         */
        moi.createMessage(msg.channel.id, message);
      });
    })
    .catch(e => {
      moiBreak(e);
    });
};
