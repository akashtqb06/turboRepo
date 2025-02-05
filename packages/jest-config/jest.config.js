// packages/jest-config/jest.config.js
const { defaults } = require('jest-config');

module.exports = {
  preset: 'ts-jest', // If using TypeScript
  testEnvironment: 'jsdom', // Browser-like testing
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // Add Jest DOM matchers
  moduleNameMapper: {
    '\\.css$': 'jest-transform-stub', // Mock CSS imports
  },
  collectCoverage: true,
};
