import React, { Component } from 'react';
import { render } from 'react-dom';
import lodash from 'lodash';

import { testPosts, testMedia } from './data';

lodash.set(global, 'React', React);
lodash.set(global, 'lodash', lodash);
lodash.set(
  global,
  'wp',
  {
    element: {
      Component,
      render,
    },
  },
);

const jsonPromise = url =>
  new Promise((resolve) => {
    if (url.indexOf('?snapshot-category') > -1) {
      resolve(testPosts);
    } else {
      resolve(testMedia);
    }
  });

lodash.set(
  global,
  'fetch',
  url =>
    new Promise((resolve) => {
      resolve({ json: () => jsonPromise(url) });
    }),
);
