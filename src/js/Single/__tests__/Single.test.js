import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter, Route } from 'react-router-dom';

import { testPostsWithMedia } from '../../../../demo/src/data';

import Single from '..';

const post = testPostsWithMedia[0];

const Component = () => (
  <BrowserRouter>
    <Route>
      <Single {...post} />
    </Route>
  </BrowserRouter>
);

describe('Single', () => {
  it('renders', () => {
    const tree = renderer.create(<Component />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
