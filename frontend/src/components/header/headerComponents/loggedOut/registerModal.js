import React, { useRef, useEffect } from 'react'
import RegisterForm from './registerForm'

export default function RegisterModal(props) {
    const RegisterModalStyle = {
        left: `${props.RegisterPosition.left - (props.RegisterPosition.width / 1.2)}px`,
        top: `${props.RegisterPosition.top * 4}px`
    }
    const RegisterWrapperRef = useRef(null);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
          document.removeEventListener("click", handleClickOutside, false);
        };
      }, []);
    
      const handleClickOutside = event => {
        if (RegisterWrapperRef.current && !RegisterWrapperRef.current.contains(event.target)) {
            props.clearAll();
        }
      };
    return (
        <div className="fixed lg:w-64 lg:h-64 border-2 bg-white shadow-lg w-screen h-64 p-4"
            ref={RegisterWrapperRef}
            style={RegisterModalStyle}>
            <RegisterForm />
        </div>
    )
}