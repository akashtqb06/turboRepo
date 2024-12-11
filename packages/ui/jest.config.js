const sharedConfig = require('@repo/jest-config/jest.config');

module.exports = {
  ...sharedConfig,
  displayName: 'ui', // Identifies this package in test reports
  testMatch: ['<rootDir>/src/**/*.(test|spec).(ts|tsx|js|jsx)'],
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
  }
}