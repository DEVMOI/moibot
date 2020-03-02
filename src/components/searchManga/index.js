import searchManga from './searchManga';

/**
 *
 * @param {*} moi // Used to init bot commands
 */
export default moi => {
  moi.registerCommand(
    'manga',
    msg => {
      searchManga(moi,msg);
    },
    {
      description: 'Searches Anilist for Manga',
      fullDescription:
        "This command could be used to check if the bot is up. Or entertainment when you're bored.",
    }
  );
};
