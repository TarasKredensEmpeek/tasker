/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};
