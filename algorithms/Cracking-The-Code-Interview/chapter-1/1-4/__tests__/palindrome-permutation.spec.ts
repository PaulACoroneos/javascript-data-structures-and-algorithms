import palindromePermutation from '../palindrome-permutation';

describe('palindromePermutation', () => {
  test('Expect "Tact Coa" to return true', () => {
    expect(palindromePermutation('Tact Coa')).toBe(true);
  });
  test('#$%^^^ should return false', () => {
    expect(palindromePermutation('#$%^^^')).toBe(false);
  })
})