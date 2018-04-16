import { testPosts } from '../../../../demo/src/data';
import reducer from '../reducer';

describe('reducer', () => {
  it('handles a nonexistent action', () => {
    expect(reducer({ myStateAttr: true })).toMatchObject({
      myStateAttr: true,
    });
  });

  it('handles an unused type', () => {
    expect(reducer({ myStateAttr: true }, { type: 'SOME_TYPE' })).toMatchObject({
      myStateAttr: true,
    });
  });

  it('handles RECEIVE_POSTS', () => {
    expect(reducer({}, { type: 'RECEIVE_POSTS', posts: testPosts })).toMatchObject({
      posts: testPosts,
    });
  });

  it('handles UPDATE_POSTS', () => {
    expect(reducer({}, { type: 'UPDATE_POSTS', posts: testPosts })).toMatchObject({
      posts: testPosts,
    });
  });
});
