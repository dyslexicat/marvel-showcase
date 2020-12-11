const Reducer = (state, action) => {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        characters: state.characters.concat(action.payload),
      };
    case "SET_OFFSET":
      if (state.offset < 1 || (state.maxOffset && (state.offset > state.maxOffset))) {
        return;
      }

      return {
        ...state,
        offset: action.payload,
      };
    case "SET_MAX_OFFSET":
      return {
        ...state,
        maxOffset: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
