export const appDidMount = termId => ({
  type: 'APP_DID_MOUNT',
  termId,
});

export const receivePosts = posts => ({
  type: 'RECEIVE_POSTS',
  posts,
});

export const updatePosts = posts => ({
  type: 'UPDATE_POSTS',
  posts,
});
