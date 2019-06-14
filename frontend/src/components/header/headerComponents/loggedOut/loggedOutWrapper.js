import React, { useState, useRef, useEffect } from 'react'
import RegisterModal from './registerModal'
import LoginModal from './loginModal'

export default function LoggedOutWrapper() {
  function clearAll() {
    setRegisterOpen(false);
    setLoginOpen(false);
  }
  function toggleLogin() {
    setLoginOpen(prevIsLoginOpen => !prevIsLoginOpen) 
    setRegisterOpen(false)
  }
  function toggleRegister() {
    setRegisterOpen(prevIsRegisterOpen => !prevIsRegisterOpen)
    setLoginOpen(false)
  }
  const loginRef = useRef();
  const registerRef = useRef();
  const [position, setPosition] = useState({
    loginPosition: null,
    registPosition: null
  });
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  
  useEffect(
    () => {
    function getPosition() {
      const loginPosition = loginRef.current.getBoundingClientRect()
      const registerPosition = registerRef.current.getBoundingClientRect()
      setPosition({
        loginPosition: loginPosition,
        registerPosition: registerPosition
      })
    }
    getPosition();
  }, []);

    return (
      <div className="relative">
        <button className="lg:px-6 lg:py-3 px-4 font-semibold text-blue-top text-xs"
        ref={loginRef}
        onClick={toggleLogin}>
          Login
        </button>
        {
            isLoginOpen 
            ? 
            <LoginModal 
            LoginPosition={position.loginPosition}
            clearAll={clearAll}
            />
            :
            null
        }
        <button className="lg:px-6 lg:py-3 py-2 px-3 bg-green-light font-semibold text-white rounded shadow-md text-xs botton-hover-color hover:bg-green"
        onClick={toggleRegister}
        ref={registerRef}>
          Register
        </button>
        {
            isRegisterOpen 
            ? 
            <RegisterModal 
            RegisterPosition={position.registerPosition}
            clearAll={clearAll}
            />
            :
            null
        }
      </div>
    )
}