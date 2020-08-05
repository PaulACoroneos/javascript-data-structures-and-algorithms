import palindromePermutations from '../palindrome-permutations';
describe('test palindrome permutations', () => {
    test('Returns true for Tact Coa (even)', () => {
        expect(palindromePermutations('Tact Coa')).toBe(true);
    });
    test('Returns false for abba rat (even)', () => {
        expect(palindromePermutations('abba rat')).toBe(false);
    });
    test('Returns true for radar (odd)', () => {
        expect(palindromePermutations('radar')).toBe(true);
    });
    test('Returns false for dumba (odd)', () => {
        expect(palindromePermutations('dumba')).toBe(false);
    });
});
