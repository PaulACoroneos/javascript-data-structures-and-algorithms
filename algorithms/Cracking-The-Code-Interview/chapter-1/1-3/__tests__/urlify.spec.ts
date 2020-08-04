import urlify from '../urlify';
describe('test urlify', () => {
    test('do not add any %20 to string w/ no spaces', () => {
        expect(urlify('sdfsdf')).toBe('sdfsdf');
    });
    test('returns corrected string for 1 instance of space', () => {
        expect(urlify('h ello')).toBe('h%20ello');
    });
    test('returns corrected string for 2 instances of space back to back', () => {
        expect(urlify('h  ello')).toBe('h%20%20ello');
    });
    test('returns corrected string for 2 instances of space in separate places', () => {
        expect(urlify('h ell o')).toBe('h%20ell%20o');
    });
});
