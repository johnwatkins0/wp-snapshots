import { getRootUrl } from '../getRootUrl';

test('getRootUrl function', () => {
  expect(getRootUrl()).toBe('http://www.mysite.com');
});
