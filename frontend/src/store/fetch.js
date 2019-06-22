import React, { useState, createContext } from "react";

const INITIAL_STATE = {
  jobs: ""
};

export const FetchContext = createContext();

export function FetchProvider(props) {
  const [isFetchingData, setFetchData] = useState(false);
  const [jobs, setJobs] = useState(INITIAL_STATE);

  return (
    <FetchContext.Provider
      value={{ isFetchingData, setFetchData, jobs, setJobs }}
    >
      {props.children}
    </FetchContext.Provider>
  );
}
