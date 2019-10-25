import axios from 'axios';
import { moiBreak, toCapitalize } from '../util';

/**
 *
 * @param {*} moi // Used to init bot commands
 */
export default moi => {
	moi.registerCommand(
		'manga',
		msg => {
			var query = `
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
						genre
						averageScore
						popularity
						
					}
				}
			}
			`;
			var variables = {
				search: ''
			};

			let clean = msg.content.replace(`${process.env.prefix}manga `, '');

			clean = toCapitalize(clean);
			variables.search = clean;

			axios
				.post('https://graphql.anilist.co', {
					query: query,
					variables: variables
				})
				.then(function(response) {
					let isFound = false;
					const { media } = response.data.data.Page;
					media.forEach(item => {
						let {
							nameCheck,
							title,
							toCode,
							format,
							chapters,
							volumes,
							genres,
							averageScore,
							popularity
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
								moiBreak(`${clean} Found`);
							}
							moi.createMessage(msg.channel.id, `${clean} Not Found`);
							moiBreak(`${clean} Not Found`);
						}

						isFound = true;
						toCode = '```';
						const message = `
						${toCode}

						${moititle}
						
						${format}
						
						${chapters}

						${volumes}

						${genres}

						${averageScore}

						${popularity}

						${toCode}
						`;
						console.log(message);
						moi.createMessage(msg.channel.id, message);
					});
				})
				.catch(e => {
					moiBreak(e);
				});
		},
		{
			// Make a ping command
			// Responds with "Pong!" when someone says "!ping"
			description: 'Searches Anilist for Manga',
			fullDescription:
				"This command could be used to check if the bot is up. Or entertainment when you're bored."
		}
	);
};
