import React, { useState, createContext } from 'react'

export const FetchContext = createContext();

export function FetchProvider(props) {
    
    const [isFetchingData, setFetchData] = useState(false);
    const [jobs, setJobs] = useState([]);

    return (
        <FetchContext.Provider
            value={{ isFetchingData, setFetchData, jobs, setJobs}}
            >
            {props.children}
        </FetchContext.Provider>
    )
}