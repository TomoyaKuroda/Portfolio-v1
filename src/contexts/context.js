import React, { createContext, useState } from "react";

const Context = createContext([{}, () => {}]);

const initialState = {
  loading: true
};

const ContextProvider = props => {
  const [state, setState] = useState({ initialState });
  return (
    <Context.Provider value={[state, setState]}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
