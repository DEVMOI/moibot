import createQuery from './index';

describe('createQuery', () => {
  test('Splits String into Array', () => {
    let string = '()dnd class bard';
    let array = ['()dnd', 'class', 'bard'];
    let query = createQuery(string, ' ');
    expect(query).toStrictEqual(array);
  });
  test('Removes unwanted text ', () => {
    let string = '()dnd class bard';
    let array = ['class', 'bard'];
    let query = createQuery(string, '()dnd ', ' ');
    expect(query).toStrictEqual(array);
  });
});
