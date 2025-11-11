export default {
  testEnvironment: 'node',
  transform: {},
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  collectCoverageFrom: [
    'api/**/*.js',
    '!api/node_modules/**',
    '!api/index.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/api/__tests__/setup.js'],
  moduleFileExtensions: ['js', 'json'],
  verbose: true,
};
