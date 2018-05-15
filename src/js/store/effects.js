import { REST_PATH, TAXONOMY } from '../constants';
import { getRootUrl } from '../utils/getRootUrl';
import { getMediaIdsFromPosts } from '../utils/getMediaIdsFromPosts';
import { addImagesToPosts } from '../utils/addImagesToPosts';

import { receivePosts, updatePosts } from './actions';

const effects = {
  APP_DID_MOUNT: async (action, { dispatch }) => {
    const url = `${getRootUrl()}${REST_PATH}`;
    const params = `${TAXONOMY}=${
      action.termId
    }&per_page=99&_fields=id,title,slug,excerpt,content,featured_media,snapshot-category`;
    const response = await fetch(`${url}?${params}`);
    const posts = await response.json();
    dispatch(receivePosts(posts));
  },

  RECEIVE_POSTS: async ({ posts }, { dispatch }) => {
    const url = `${getRootUrl()}wp/v2/media/?include=${getMediaIdsFromPosts(posts)}&_fields=id,media_details`;
    let media = sessionStorage.getItem(url);
    if (media) {
      media = JSON.parse(media);
    } else {
      const response = await fetch(url);
      media = await response.json();
      sessionStorage.setItem(url, JSON.stringify(media));
    }

    const updatedPosts = addImagesToPosts(posts, media);
    dispatch(updatePosts(updatedPosts));
  },
};

export default effects;
