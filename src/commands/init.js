const init = command => {
	command.on('ready', () => {
		console.log('Online...');
	});
};
export default init