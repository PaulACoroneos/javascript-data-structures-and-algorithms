import { MySet } from './../set';

describe('Set', () => {
  test('All methods work as expected', () => {
    const testSet = new MySet();
    testSet.add('hello');
    testSet.add('paul');
    testSet.add('paul');
    expect(testSet.values()).toStrictEqual(['hello', 'paul']);
    expect(testSet.size()).toStrictEqual(2);
    testSet.delete('paul');
    expect(testSet.values()).toStrictEqual(['hello']);
    expect(testSet.has('hello')).toBe(true);
    expect(testSet.has('paul')).toBe(false);
    testSet.clear();
    expect(testSet.size()).toBe(0);
  })
})
