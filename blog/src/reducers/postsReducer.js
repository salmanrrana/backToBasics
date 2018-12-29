// one way of doing the reducer, but not the common way of coding it
// export default (state = [], action) => {
//   if (action.type === "FETCH_POSTS") {
//     return action.payload;
//   }
//
//   return state;
// };

// doing this with a switch statement
export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
