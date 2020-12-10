const Reducer = (state, action) => {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        characters: action.payload,
      };
    case "SET_OFFSET":
      return {
        ...state,
        offset: action.payload
      }
    default:
      return state;
  }
};

export default Reducer;
