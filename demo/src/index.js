import set from 'lodash.set';

import { testPosts, testMedia } from './data';

import { startApp, start } from '../..';

const jsonPromise = url =>
  new Promise((resolve) => {
    if (url.indexOf('?snapshot-category') > -1) {
      resolve(testPosts);
    } else {
      resolve(testMedia);
    }
  });

set(
  global,
  'fetch',
  url =>
    new Promise((resolve) => {
      resolve({ json: () => jsonPromise(url) });
    }),
);

window.removeEventListener('load', start);
window.addEventListener('load', startApp);
