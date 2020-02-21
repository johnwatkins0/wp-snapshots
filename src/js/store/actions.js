export const appDidMount = (termId, previewPost) => ({
  type: 'APP_DID_MOUNT',
  termId,
  previewPost,
});

export const receivePosts = posts => ({
  type: 'RECEIVE_POSTS',
  posts,
});

export const updatePosts = posts => ({
  type: 'UPDATE_POSTS',
  posts,
});
