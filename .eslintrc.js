module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  plugins: ['jest'],
  env: { browser: true, es6: true, 'jest/globals': true },
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
  },
  globals: {
    wpApiSettings: true,
    testPosts: true,
    testMedia: true,
    testState: true,
    testPostsWithMedia: true,
  },
};
