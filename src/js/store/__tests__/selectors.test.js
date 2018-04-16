import { testPosts, testState } from '../../../../demo/src/data';
import { getPosts, getPostBySlug } from '../selectors';

test('getPosts selector', () => {
  expect(getPosts(testState)).toBe(testPosts);
});

test('getPostsBySlug selector', () => {
  expect(getPostBySlug(testState, testPosts[0].slug)).toMatchObject(testPosts[0]);
});
