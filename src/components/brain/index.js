const isBot = bot => {
  bot ? false : true;
};

export default moi => {
  moi.on('messageCreate', msg => {
    const { username, bot, content } = msg.member;
    isBot(bot) ? console.log(msg.content) : null;
  });
};

// moi.createMessage(msg.channel.id, msg)
