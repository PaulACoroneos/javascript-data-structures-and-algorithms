import checkPermutations from '../check-permutations';
describe('test checkPermutations', () => {
    test('returns false for uneven str lengths', () => {
        expect(checkPermutations('long', 'longer')).toBe(false);
    });
    test('returns false for strings that are not permutations of each other', () => {
        expect(checkPermutations('abba', 'dada')).toBe(false);
    });
    test('returns true for strings that are permutations of each other', () => {
        expect(checkPermutations('radar', 'darar')).toBe(false);
    });
});
