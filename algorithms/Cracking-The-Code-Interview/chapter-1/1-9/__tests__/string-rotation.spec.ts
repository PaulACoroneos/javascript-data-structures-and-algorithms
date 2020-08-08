import stringRotation from '../string-rotation';

describe('stringRotation() ', () => {
    it('handles an empty string', () => {
        expect(stringRotation('', '')).toBe(false);
    });
    it('handles an uneven strings', () => {
        expect(stringRotation('a', 'aa')).toBe(false);
    });
    it('handles a rotation', () => {
        expect(stringRotation('elloh', 'llohe')).toBe(true);
    });
});
