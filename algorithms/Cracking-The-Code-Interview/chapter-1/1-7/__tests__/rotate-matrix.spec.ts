import rotateMatrix from '../rotate-matrix';
describe('rotateMatrix', () => {
    test('it returned undefined for a matrix that is not square', () => {
        const testMatrix = [[1], [1, 2]];
        rotateMatrix(testMatrix);
        expect(testMatrix).toBe(testMatrix);
    });
    test('it handles an empty matrix', () => {
        const testMatrix = [[]];
        rotateMatrix(testMatrix);
        expect(testMatrix).toBe(testMatrix);
    });
    test('it handles a matrix of size 1', () => {
        const testMatrix = [[1]];
        rotateMatrix(testMatrix);
        expect(testMatrix).toBe(testMatrix);
    });
    test('it handles an odd matrix ', () => {
        const testMatrix = [
            [1, 2, 3],
            [2, 1, 3],
            [3, 2, 1],
        ];
        rotateMatrix(testMatrix);
        expect(testMatrix).toStrictEqual([
            [3, 2, 1],
            [2, 1, 2],
            [1, 3, 3],
        ]);
    });
    test('it handles an even matrix ', () => {
        const testMatrix = [
            [1, 2],
            [2, 1],
        ];
        rotateMatrix(testMatrix);
        expect(testMatrix).toStrictEqual([
            [2, 1],
            [1, 2],
        ]);
    });
});
