import set from 'lodash.set';

import { testPosts, testMedia } from '../../../../demo/src/data';
import effects from '../effects';
import { receivePosts } from '../actions';

const mockFetchResponse = jsonData => ({
  json: () =>
    new Promise((resolve) => {
      resolve(jsonData);
    }),
  ok: true,
});

const getFetchMock = data => () =>
  new Promise((resolve) => {
    resolve(mockFetchResponse(data));
  });

describe('effects', () => {
  const dispatch = jest.fn();
  describe('APP_DID_MOUNT', () => {
    it('fetches posts', async () => {
      const fetchMock = getFetchMock(testPosts);
      set(global, 'fetch', fetchMock);

      effects.APP_DID_MOUNT({}, { dispatch });

      const response = await fetchMock();
      const receivedData = await response.json();

      expect(dispatch).toHaveBeenCalledWith(receivePosts(receivedData));
    });
  });

  describe('RECEIVE_POSTS', () => {
    it('adds media to posts', async () => {
      const fetchMock = getFetchMock(testMedia);
      set(global, 'fetch', fetchMock);
      set(global, 'sessionStorage', {
        getItem: () => false,
        setItem: () => false,
      });

      effects.RECEIVE_POSTS({ posts: testPosts }, { dispatch });

      const response = await fetchMock();
      await response.json();

      expect(dispatch).toHaveBeenCalled();
    });

    it('adds media to posts from sessionStorage', async () => {
      set(global, 'sessionStorage', {
        getItem: () => JSON.stringify(testPosts),
        setItem: () => null,
      });

      effects.RECEIVE_POSTS({ posts: testPosts }, { dispatch });

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
