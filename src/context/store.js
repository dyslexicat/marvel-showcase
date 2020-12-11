import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

// we want to have the currentOffset, an array of characters and the maxOffset
const initialState = {
  offset: 1,
  characters: [],
  maxOffset: null
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;