const setContributionMessage = () => {
	const contributeMessage =
		'Would you like to help? --- Find us at https://github.com/MOIKUNE-CODES/moibot';
	return contributeMessage;
};

export default moi => {
	moi.registerCommand('contribute', setContributionMessage, {
		description: 'Want to help?',
		fullDescription: 'Information on how and where to help with the project.'
	});
};
