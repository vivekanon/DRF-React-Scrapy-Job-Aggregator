import React, { useState, createContext } from "react";

const INITIAL_DATA_STATE = {
  payload: ""
};

const INITIAL_VALUES_STATE = {
  search: "",
  location: ""
};
export const FetchContext = createContext();

export function FetchProvider(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(INITIAL_DATA_STATE);
  const [values, setValue] = useState(INITIAL_VALUES_STATE);
  return (
    <FetchContext.Provider value={{ data, setData, loading, setLoading, values, setValue, error, setError }}>
      {props.children}
    </FetchContext.Provider>
  );
}
