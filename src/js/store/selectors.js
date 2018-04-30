import find from 'lodash/find';
import get from 'lodash/get';

/**
 * Gets all posts out of the store.
 *
 * @param {Object} state The current state.
 * @return {array} The posts.
 */
export const getPosts = state => get(state, 'posts', []);

/**
 * Gets a post out of the current state by its slug.
 *
 * @param {Object} state An app state.
 * @param {string} slug A post slug.
 * @return {Object} The found post.
 */
export const getPostBySlug = (state, slug) => find(getPosts(state), { slug });
