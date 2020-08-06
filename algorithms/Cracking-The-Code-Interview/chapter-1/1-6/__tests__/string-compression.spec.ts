import stringCompression from '../string-compression';

describe('String Compression', () => {
    test('a string with no dupes should return itself', () => {
        expect(stringCompression('lol')).toBe('lol');
    });
    test('a string with one dupe set returns correct result', () => {
        expect(stringCompression('loool')).toBe('l3ol');
    });
    test('a string with two dupe sets returns correct result', () => {
        expect(stringCompression('looollll')).toBe('l3o4l');
    });
    test('capital and lower case letters are distinct', () => {
        expect(stringCompression('lOol')).toBe('lOol');
    });
});
