import isUnique from '../is-unique';
describe('test isUnique', () => {
    test('works for unique string help', () => {
        expect(isUnique('help')).toBe(true);
    });
    test('isUnique fails for repeating string abba', () => {
        expect(isUnique('abba')).toBe(false);
    });
});
