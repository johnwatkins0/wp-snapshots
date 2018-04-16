import { getMediaIdsFromPosts } from '../getMediaIdsFromPosts';
import { testPosts } from '../../../../demo/src/data';

test('getMediaIdsFromPosts function', () => {
  const ids = getMediaIdsFromPosts(testPosts);
  expect(ids).toBe('7634,7635,7636,7637,7638,7639,7640');

  const moreData = testPosts.concat([{ id: '444' }]);
  const newIds = getMediaIdsFromPosts(moreData);
  expect(newIds).toBe('7634,7635,7636,7637,7638,7639,7640');
});
