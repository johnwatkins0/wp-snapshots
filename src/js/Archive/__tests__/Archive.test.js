import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter, Route } from 'react-router-dom';

import { testPostsWithMedia } from '../../../../demo/src/data';

import Archive from '..';

Enzyme.configure({ adapter: new Adapter() });

const Component = () => (
  <BrowserRouter>
    <Route>
      <Archive termName="Name" termDescription="Description" posts={testPostsWithMedia} />
    </Route>
  </BrowserRouter>
);

describe('Archive', () => {
  it('renders', () => {
    const tree = renderer.create(<Component />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('has the correct number of items', () => {
    const wrapper = mount(<Component />);
    const navLinks = wrapper.find('.SnapshotsNavLink');
    expect(navLinks.length).toBe(7);
  });
});
