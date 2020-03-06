import joinArray from './index';

describe('joinArray', () => {
  test('should join array into string', () => {
    let array = ['moikapy', 'is', 'creating', 'a', 'test'];
    let joinedArray = 'moikapy is creating a test';
    let cleanString = joinArray(array, ' ');
    expect(cleanString === joinedArray).toBeTruthy();
  });
});
