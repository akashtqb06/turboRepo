const { defaults } = require('jest-config');

module.exports = {
  preset: 'ts-jest', // If using TypeScript
  testEnvironment: 'jsdom', // Browser-like testing
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // Add Jest DOM matchers
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transpile TypeScript
  },
  moduleNameMapper: {
    '\\.css$': 'jest-transform-stub',  // This will mock CSS imports
  }
};