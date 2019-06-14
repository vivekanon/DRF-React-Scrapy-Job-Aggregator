import React, { useState } from 'react'


export default function LoggedInWrapper() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <>
        <button className="lg:px-6 lg:py-3 px-4 font-semibold text-blue-top text-xs "
        onClick={()=> {setIsLoggedIn(false)}}>
          Logout
        </button>
           <button className="lg:px-6 lg:py-3 py-2 px-3 bg-green-light font-semibold text-white rounded shadow-md text-xs botton-hover-color hover:bg-green"
           onClick={()=> {setRegisterOpen(!isRegisterOpen)}}>
             Profile
        </button>
        </>
    )
}