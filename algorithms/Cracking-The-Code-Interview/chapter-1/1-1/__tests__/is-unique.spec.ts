import isUnique from '../is-unique';

describe('isUnqiue', () => {
  test('It returns true for a string with all unique characters', () => {
    expect(isUnique('fabric$1')).toBe(true);
  });

  test('It returns false for a string with non-unique characters', () => {
    expect(isUnique('aaa')).toBe(false);
  })

})