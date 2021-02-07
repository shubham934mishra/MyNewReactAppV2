module.exports = {
  preset: 'react-native',
  setupFiles: [
    './jest.config.js',
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/externals/externals.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],
};
