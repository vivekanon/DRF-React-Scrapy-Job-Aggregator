import React, { useEffect, useRef } from 'react'
import LoginForm from './loginForm'

export default function LoginModal(props) {
    const LoginModalStyle = {
        left: `${props.LoginPosition.left - props.LoginPosition.width}px`,
        top: `${props.LoginPosition.top * 4}px`
    }
    const wrapperRef = useRef(null);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
          document.removeEventListener("click", handleClickOutside, false);
        };
      }, []);
    
      const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            props.clearAll();
        }
      };
     
    return (
        <div className="fixed w-64 h-64 border-2 bg-white shadow-lg p-4"
            style={LoginModalStyle}
            ref={wrapperRef}>
            <LoginForm />
        </div>
    )
}