import { reverseString } from './../reverse-string';

test('ReverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('ReverseString reverses a string', () => {
    expect(reverseString('abcd')).toEqual('dcba');
});

test('ReverseString reverse a string', () => {
    expect(reverseString('  abcd')).toEqual('dcba  ');
});
