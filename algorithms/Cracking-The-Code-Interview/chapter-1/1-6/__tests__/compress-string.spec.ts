import compressString from '../compress-string';

describe('compressString', () => {
  test('Expect "aaabccc" to be "a3bc3"', () => {
    expect(compressString('aaabccc')).toBe('a3bc3');
  });
  test('Expect "abc" to be "abc"', () => {
    expect(compressString('abc')).toBe('abc');
  });
  test('Expect "!@$$$" to be "!@$3"', () => {
    expect(compressString('!@$$$')).toBe('!@$3');
  });

})