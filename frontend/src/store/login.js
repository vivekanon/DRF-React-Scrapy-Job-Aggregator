import React, { useState, createContext } from 'react'

export const LoginContext = createContext();
const windowGlobal = typeof window !== 'undefined' && window
export function LoginProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = windowGlobal ? useState(windowGlobal.localStorage.getItem('isLoggedIn') || false) : useState();
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isRegisterOpen, setRegisterOpen] = useState(false);
    return (
        <LoginContext.Provider
            value={{ isLoginOpen, setLoginOpen, isRegisterOpen, setRegisterOpen, isLoggedIn, setIsLoggedIn }}
            >
            {props.children}
        </LoginContext.Provider>
    )
}