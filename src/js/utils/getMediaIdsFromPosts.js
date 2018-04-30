import get from 'lodash/get';

/**
 * Creates a comma-separated list of featured media ids from a list of posts.
 *
 * @param {array} posts WP posts.
 * @return {string} A comma-separated list.
 */
export const getMediaIdsFromPosts = posts =>
  posts.reduce((ids, post) => {
    const id = get(post, 'featured_media', null);
    if (id === null) {
      return ids;
    }

    return `${ids.length ? `${ids},` : ids}${id}`;
  }, '');
