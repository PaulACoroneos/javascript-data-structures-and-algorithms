import oneAway from '../one-away';

describe('one away', () => {
    test('it handle 2 words that are 1 char off is true', () => {
        expect(oneAway('foo', 'fob')).toBe(true);
    });

    test('it handle 2 words that are 1 char off in length', () => {
        expect(oneAway('foo', 'fo')).toBe(true);
    });

    test('it handle 2 words that are 2 char off is false', () => {
        expect(oneAway('goo', 'fob')).toBe(false);
    });

    test('it handle 2 words that are 2 char length difference', () => {
        expect(oneAway('good', 'fob')).toBe(false);
    });
});
