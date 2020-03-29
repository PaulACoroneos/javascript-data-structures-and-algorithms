module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
  ],
  coverageThreshold: {
    global: {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": -10
    }
  },
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
