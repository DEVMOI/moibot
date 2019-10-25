import toCapitalize from './index';

describe('toCapitalize', () => {
	test('should capitalize word in string', () => {
		let word = 'moikapy';
		let capitalWord = 'Moikapy';
		word = toCapitalize(word);
		expect(word === capitalWord).toBeTruthy();
	});
	test('should capitalize each word in a phrase', () => {
		let phrase = 'this is a test phrase';
		const capPhrase = 'This Is A Test Phrase';
		phrase = toCapitalize(phrase);

		expect(phrase === capPhrase).toBeTruthy();
	});
});
