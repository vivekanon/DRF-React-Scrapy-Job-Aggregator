import React, { useState, createContext } from "react";

const INITIAL_STATE = {
  jobs: ""
};

export const FetchContext = createContext();

export function FetchProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState(INITIAL_STATE);

  return (
    <FetchContext.Provider value={{ jobs, setJobs, isLoading, setIsLoading }}>
      {props.children}
    </FetchContext.Provider>
  );
}
