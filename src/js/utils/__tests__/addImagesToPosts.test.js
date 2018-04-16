import { addImagesToPosts } from '../addImagesToPosts';
import { testPosts, testMedia, testPostsWithMedia } from '../../../../demo/src/data';

test('addImagesToPosts function', () => {
  expect(addImagesToPosts(testPosts, testMedia)).toEqual(testPostsWithMedia);
});
