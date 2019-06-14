import React, { useRef, useEffect } from 'react'

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
             <div className="flex flex-col justify-between h-full">
                <p className="text-blue-top font-semibold text-xs">
                Register
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
                 <input
                    className="bg-white border-2 rounded text-base appearance-none w-full py-2 px-2 text-blue-top focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Confirm Password"
                />
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