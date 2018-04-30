import get from 'lodash/get';

/**
 * Retrieves the WP REST API root URL.
 *
 * @return {string} the URL.
 */
export const getRootUrl = () => get(global, ['wpApiSettings', 'root'], '');
