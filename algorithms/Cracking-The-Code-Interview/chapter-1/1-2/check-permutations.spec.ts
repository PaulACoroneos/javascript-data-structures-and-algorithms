import checkPermutations from './check-permutations';

describe('checkPermutations', () => {
  test('If one string is a permutation of the other it returns true', () => {
    const isPermutation = checkPermutations('lol', 'lolol');
    expect(isPermutation).toBe(true);
  });

  test('If one string is not a permutation of the other it returns false', () => {
    const isPermutation = checkPermutations('^%*&123hihi', '()*^*($%(*&jkdf)');
    expect(isPermutation).toBe(false);
  });

})