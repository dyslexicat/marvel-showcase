const Reducer = (state, action) => {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        characters: state.characters.concat(action.payload),
      };
    case "SET_OFFSET":
      if (state.offset < 1 || state.offset > 20) {
        return;
      }
      
      return {
        ...state,
        offset: action.payload
      }
    default:
      return state;
  }
};

export default Reducer;
