import React from 'react';
import renderer from 'react-test-renderer';
import set from 'lodash.set';

import App from '../App';

import { testPosts, testMedia } from '../../../demo/src/data';

describe('App', () => {
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

  set(global, 'sessionStorage', {
    getItem: () => false,
    setItem: () => false,
  });

  it('renders', () => {
    const tree = renderer
      .create(<App
        termId="70"
        termName="Name"
        termSlug="slug"
        termDescription="My description"
        basenamePrefix=""
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
