module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: ['/node_modules/(?!@react-navigation/elements)'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
    '@react-native/js-polyfills/error-guard.js':
      '<rootDir>/node_modules/react-native/jest/transform.js',
  },
};
