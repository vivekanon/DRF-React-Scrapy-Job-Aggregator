import React, { useEffect, useRef } from 'react'

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
             <div className="flex flex-col justify-between h-full">
                <p className="text-blue-top font-semibold text-xs">
                Login
                </p>
                <form className="flex flex-col justify-around rounded flex-1 mt-2 mb-2">
                <input
                    className="bg-white border-2 rounded text-base appearance-none w-full py-2 px-2 text-blue-top focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Email@email.com"
                />
                <input
                    className="bg-white border-2 rounded text-base appearance-none w-full py-2 px-2 text-blue-top focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Password"
                />
                <div className="flex justify-between px-2 w-3/4">
                    <input
                    
                        type="checkbox"
                    />
                    <p className="text-blue-top font-semibold text-xs">Remember me</p>
                </div>
                </form>
                <div>
                    <button className="px-4 py-2 text-xs bg-green-light text-white border rounded m-1">
                    Submit
                    </button>
                </div>
            </div>
        </div>
    )
}