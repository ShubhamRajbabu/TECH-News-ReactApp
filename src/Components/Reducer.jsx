const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((post) => post.objectID !== action.payload),
      };
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
        page: 0,
      };
    case "SET_INCRPAGE":
      return {
        ...state,
        page: state.page + 1,
      };
    case "SET_DECRPAGE":
      return {
        ...state,
        page: state.page - 1,
      };
    default:
      return state;
  }
};
export default reducer;
