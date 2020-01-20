import urlify from '../urlify';

describe('urlify', () => {
  test('Given a string with blank spaces we add %20 to those spaces', () => {
    expect(urlify('l o l')).toBe('l%20o%20l');
  });
})