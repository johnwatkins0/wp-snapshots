import { testPosts } from '../../../../demo/src/data';
import { appDidMount, receivePosts, updatePosts } from '../actions';

test('appDidMount action', () => {
  expect(appDidMount('44')).toMatchObject({
    type: 'APP_DID_MOUNT',
    termId: '44',
  });
});

test('receivePosts action', () => {
  expect(receivePosts(testPosts)).toMatchObject({
    type: 'RECEIVE_POSTS',
    posts: testPosts,
  });
});

test('updatePosts action', () => {
  expect(updatePosts(testPosts)).toMatchObject({
    type: 'UPDATE_POSTS',
    posts: testPosts,
  });
});
