import React, { useContext } from "react";
import { LoginContext } from '../../../store/login'

export default function HeaderRight() {
  const { setLoginOpen, isLoginOpen, isRegisterOpen, setRegisterOpen } = useContext(LoginContext)
  return (
    <div className="w-2/5 h-full ">
      <div className="relative w-full h-full flex items-center justify-center text-white ">
        <button className="lg:px-6 lg:py-3 px-4 font-semibold text-blue-top text-xs "
        onClick={()=> setLoginOpen(!isLoginOpen)}>
          Login
        </button>
        <button className="lg:px-6 lg:py-3 py-2 px-3 bg-green-light font-semibold text-white rounded shadow-md text-xs botton-hover-color hover:bg-green"
        onClick={()=> setRegisterOpen(!isRegisterOpen)}>
          Register
        </button>
      </div>
    </div>
  );
}
