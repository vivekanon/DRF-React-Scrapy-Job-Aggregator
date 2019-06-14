import React, { useState, createContext } from 'react'

export const FetchContext = createContext();

export function FetchProvider(props) {
 
    const [isFetchingData, setFetchData] = useState(false);
    return (
        <FetchContext.Provider
            value={{ isFetchingData, setFetchData}}
            >
            {props.children}
        </FetchContext.Provider>
    )
}