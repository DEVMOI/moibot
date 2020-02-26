/**
 * Function that Capitalizes each word in string
 * @Function capitalizeEachWord
 * @param {string} str
 * @returns String
 */

export default str => {
	return str.replace(/\w\S*/g, txt => {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};
