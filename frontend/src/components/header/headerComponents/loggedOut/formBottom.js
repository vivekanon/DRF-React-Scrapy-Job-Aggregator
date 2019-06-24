import React, { useContext } from "react";
import { LoginContext } from "../../../../store/login";

export default function FormBottom() {
  const { setLoginOpen, isRegisterOpen, setRegisterOpen } = useContext(
    LoginContext
  );

  function clearAll() {
    setRegisterOpen(false);
    setLoginOpen(false);
  }
  function toggleLogin() {
    setLoginOpen(prevIsLoginOpen => !prevIsLoginOpen);
    setRegisterOpen(false);
  }
  function toggleRegister() {
    setRegisterOpen(prevIsRegisterOpen => !prevIsRegisterOpen);
    setLoginOpen(false);
  }
  return (
    <div className="flex flex-col justify-between relative">
      <button
        className="text-blue-800 fixed top-0 right-0 mr-4 mt-4 p-2 cursor-pointer lg:text-base text-base"
        onClick={clearAll}
      >
        X
      </button>
      {isRegisterOpen ? (
        <div className="flex content-center lg:pt-8 pt-2">
          <p className="text-blue-800 lg:text-base text-base">
            Have an account already?
          </p>
          <p
            className="text-blue-800 font-semibold cursor-pointer hover:font-bold ml-2"
            onClick={toggleLogin}
          >
            Log in
          </p>
        </div>
      ) : (
        <div className="flex content-center lg:pt-8 pt-2">
          <p className="text-blue-800 lg:text-base text-base">
            Don't have an account?
          </p>
          <p
            className="text-blue-800 font-semibold cursor-pointer hover:font-bold ml-2"
            onClick={toggleRegister}
          >
            Register
          </p>
        </div>
      )}
    </div>
  );
}
