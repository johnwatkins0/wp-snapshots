const React = require('react');
const lodash = require('lodash');

module.exports = {
  testMatch: ['**/?(*.)(spec|test).js?(x)'],
  collectCoverage: true,
  collectCoverageFrom: ['src/js/**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/', 'index.js'],
  globals: {
    React,
    lodash,
    wp: {
      element: {
        Component: React.Component,
      },
    },
    wpApiSettings: {
      root: 'http://www.mysite.com',
    },
  },
};
