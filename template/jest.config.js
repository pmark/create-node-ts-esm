// import { pathsToModuleNameMapper } from 'ts-jest/utils';
// import { compilerOptions } from './tsconfig.json';

export default {
  preset: 'ts-jest/presets/default-esm', // Use the ESM preset of ts-jest
  globals: {},
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1', // Resolve .js extensions to .ts files
  },
  // moduleNameMapper: {
  //   ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }), // Adjust if you're using path mapping in your tsconfig
  //   '^(\\.{1,2}/.*)\\.js$': '$1', // Handle .js extensions for ESM
  // },
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'], // Specify file extensions
  testMatch: ['<rootDir>/__tests__/**/*.test.ts'], // Adjust if your test files have a different pattern
};



const default2 = {
  displayName: 'my-app-tests',
  testMatch: ['**/?(*.)+(integration).(test).ts'],
  globals: {},
  preset: 'ts-jest/presets/default-esm', // for ESM support
  extensionsToTreatAsEsm: ['.ts'], // for ESM support
  testEnvironment: 'node',
  transform: {}, // keep blank for ESM
  moduleFileExtensions: ['ts', 'js', 'html', 'node'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1', // Resolve .js extensions to .ts files
  },
  transformIgnorePatterns: [
    "node_modules/",
    "dist/"
  ],
};