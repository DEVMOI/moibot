export default moi => {
  // Alias !halp to !help
  moi.registerCommandAlias('halp', 'help');
  moi.registerCommandAlias('h', 'help');
};
