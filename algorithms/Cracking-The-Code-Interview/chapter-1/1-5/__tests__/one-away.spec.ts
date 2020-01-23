import oneAway from '../one-away';

describe('palindromePermutation', () => {
  test('Expect "paula" "pau" to return false', () => {
    expect(oneAway('paula', 'pau')).toBe(false);
  })
  test('Expect "pau" "paula" to return false', () => {
    expect(oneAway('pau', 'paula')).toBe(false);
  })
  test('Expect "pau" "uap" to return false', () => {
    expect(oneAway('pau', 'uap')).toBe(false);
  })
  test('Expect "pau" "paul" to return true', () => {
    expect(oneAway('pau', 'paul')).toBe(true);
  });
  test('Expect "lll" "lla" to return true', () => {
    expect(oneAway('pau', 'paul')).toBe(true);
  });
})