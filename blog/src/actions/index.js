import jsonPlaceholder from "../apis/jsonPlaceholder";

//bad approach !!!!!!
// get error message: ×
// Error: Actions must be plain objects. Use custom middleware for async actions.
// export const fetchPosts = async () => {
//   const response = await jsonPlaceholder.get("/posts");
//
//   return {
//     type: "FETCH_POSTS",
//     payload: response
//   };
// };

// export const fetchPosts = async () => {
//   return async dispatch => {
//     const response = await jsonPlaceholder.get("/posts");
//
//     dispatch({
//       type: "FETCH_POSTS",
//       payload: response
//     });
//   };
// };

// This is the same code as the one directly above
// however it has been refactored down. this may be  the normal
// type of way we may see it in documentation
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
