/**
 * Reducer handling all changes to app state.
 *
 * @param {Object} state Current state.
 * @param {Object} action Action object.
 * @return {Object} The next state.
 */
function reducer(state, action = {}) {
  switch (action.type) {
    case 'RECEIVE_POSTS':
    case 'UPDATE_POSTS': {
      return {
        ...state,
        posts: action.posts,
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
