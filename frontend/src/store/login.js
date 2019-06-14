import React, { useState, createContext } from 'react'

export const LoginContext = createContext();

export function LoginProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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