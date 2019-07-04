import React, { useState, createContext } from "react";

const INITIAL_JOBS_STATE = {
  jobs: ""
};

const INITIAL_VALUES_STATE = {
  search: "",
  location: ""
};
export const FetchContext = createContext();

export function FetchProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState(INITIAL_JOBS_STATE);
  const [values, setValue] = useState(INITIAL_VALUES_STATE);
  return (
    <FetchContext.Provider value={{ jobs, setJobs, isLoading, setIsLoading, values, setValue }}>
      {props.children}
    </FetchContext.Provider>
  );
}
