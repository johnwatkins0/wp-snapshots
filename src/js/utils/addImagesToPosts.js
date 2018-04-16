import find from 'lodash.find';

export const addImagesToPosts = (posts, media) =>
  posts.map(post => ({
    ...post,
    image: find(media, { id: post.featured_media }),
  }));
