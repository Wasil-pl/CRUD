//selectors
export const getAllPosts = ( state ) => state.posts
export const getPostById = ({ posts }, postId) => posts.find(post => post.id === postId);

// actions
export const deletePost = payload => ({ type: DELETE_POST, payload });

const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return statePart.filter(post => post.id !== action.payload);
    default:
      return statePart;
  };
};

export default postsReducer;