import React, { useRef, useContext } from "react";
import { LoginContext } from "../../../../store/login";
import RegisterModal from "../loggedOut/modal/registerModal";
import LoginModal from "../loggedOut/modal/loginModal";
import { Button } from "../../../shared/button";
export default function LoggedOutWrapper() {
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

  const {
    isLoginOpen,
    setLoginOpen,
    isRegisterOpen,
    setRegisterOpen
  } = useContext(LoginContext);

  return (
    <div className="relative">
      <Button
        className=""
        onClick={toggleLogin}
      >
        Login
      </Button>
      {isLoginOpen ? <LoginModal clearAll={clearAll} /> : null}
      <button
        className="lg:px-6 lg:py-3 py-2 px-3 bg-green-400 font-semibold text-white rounded shadow-md text-xs botton-hover-color hover:bg-green-600"
        onClick={toggleRegister}
      >
        Register
      </button>
      {isRegisterOpen ? <RegisterModal clearAll={clearAll} /> : null}
    </div>
  );
}
