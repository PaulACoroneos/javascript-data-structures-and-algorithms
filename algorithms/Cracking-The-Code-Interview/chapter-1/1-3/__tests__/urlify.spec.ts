import urlify from '../urlify';
describe('test urlify', () => {
    test('do not add any %20 to string w/ no spaces', () => {
        expect(urlify(['s', 'd', 'f', 's', 'd', 'f'])).toStrictEqual(['s', 'd', 'f', 's', 'd', 'f']);
    });
    test('returns corrected string for 1 instance of space', () => {
        expect(urlify(['h', ' ', 'e', 'l', 'l', 'o'])).toStrictEqual(['h', '%', '2', '0', 'e', 'l', 'l', 'o']);
    });
    test('returns corrected string for 2 instances of space back to back', () => {
        expect(urlify(['h', ' ', ' ', 'e', 'l', 'l', 'o'])).toStrictEqual([
            'h',
            '%',
            '2',
            '0',
            '%',
            '2',
            '0',
            'e',
            'l',
            'l',
            'o',
        ]);
    });
    test('returns corrected string for 2 instances of space in separate places', () => {
        expect(urlify(['h', ' ', 'e', 'l', 'l', ' ', 'o'])).toStrictEqual([
            'h',
            '%',
            '2',
            '0',
            'e',
            'l',
            'l',
            '%',
            '2',
            '0',
            'o',
        ]);
    });
});
