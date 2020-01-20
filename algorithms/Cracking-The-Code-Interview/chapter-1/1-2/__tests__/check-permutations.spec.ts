import checkPermutations from '../check-permutations';

describe('checkPermutations', () => {
  test('If strings are different sizes return false', () => {
    const isPermutation = checkPermutations('lololol', 'olololool');
    expect(isPermutation).toBe(false);
  });

  test('If strings are permutations of each other return true', () => {
    const isPermutation = checkPermutations('paul coroneos', 'luap soenoroc');
    expect(isPermutation).toBe(true);
  });

  test('If one string is not a permutation of the other it returns false', () => {
    const isPermutation = checkPermutations('@#$', 'abc');
    expect(isPermutation).toBe(false);
  });

})