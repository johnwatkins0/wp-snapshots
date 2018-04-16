import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import set from 'lodash.set';

import { withScrollToTop } from '../withScrollToTop';

set(global, ['window', 'scrollY'], 0);
set(global, ['window', 'scrollX'], 0);
set(global, ['window', 'scrollTo'], (x, y) => {
  window.scrollX = x;
  window.scrollY = y;
});

Enzyme.configure({ adapter: new Adapter() });
test('withScrollToTop function', () => {
  window.scrollTo(50, 50);
  expect(window.scrollY).toEqual(50);
  expect(window.scrollX).toEqual(50);
  const MyComponent = () => <div />;
  const ScrolledMyComponent = withScrollToTop(MyComponent);
  mount(<ScrolledMyComponent />);
  expect(window.scrollY).toEqual(0);
  expect(window.scrollX).toEqual(0);
});
