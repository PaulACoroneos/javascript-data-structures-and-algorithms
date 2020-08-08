import zeroMatrix from '../zero-matrix';

describe('zeroMatrix()', () => {
    test('it handes an empty matrix', () => {
        const testMatrix = [[]];
        zeroMatrix(testMatrix);
        expect(testMatrix).toStrictEqual(testMatrix);
    });
    test('it handles a 1x1 matrix', () => {
        const testMatrix = [[1]];
        zeroMatrix(testMatrix);
        expect(testMatrix).toStrictEqual(testMatrix);
    });
    test('it handles a 2x2 matrix with no zeroes', () => {
        const testMatrix = [
            [1, 1],
            [2, 3],
        ];
        zeroMatrix(testMatrix);
        expect(testMatrix).toStrictEqual(testMatrix);
    });
    test('it handles a 2x2 matrix with 1 0', () => {
        const testMatrix = [
            [1, 0],
            [2, 3],
        ];
        zeroMatrix(testMatrix);
        expect(testMatrix).toStrictEqual([
            [0, 0],
            [2, 0],
        ]);
    });
    test('it handles a 2x3 matrix with 1 0', () => {
        const testMatrix = [
            [1, 0, 1],
            [2, 3, 1],
        ];
        zeroMatrix(testMatrix);
        expect(testMatrix).toStrictEqual([
            [0, 0, 0],
            [2, 0, 1],
        ]);
    });
});
