import React, { useContext, useState } from "react";
import { LoginContext } from "../../../../store/login";
import Modal from "./modal/modal";
import { Button, ButtonPrimary } from "../../../shared/button";
import { TextPrimary } from "../../../shared/text";

export default function LoggedOutWrapper() {
  const [loginType, setLoginType] = useState();
  function clearAll() {
    setRegisterOpen(false);
    setLoginOpen(false);
  }
  function toggleLogin() {
    setLoginOpen(prevIsLoginOpen => !prevIsLoginOpen);
    setRegisterOpen(false);
    setLoginType('login');
  }
  function toggleRegister() {
    setRegisterOpen(prevIsRegisterOpen => !prevIsRegisterOpen);
    setLoginOpen(false);
    setLoginType('register');
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
        
        loginType='login'
        onClick={toggleLogin}
      >
      <TextPrimary indigo>Login</TextPrimary>
        
      </Button>
      {isLoginOpen ? <Modal loginType={loginType} clearAll={clearAll} /> : null}
      <ButtonPrimary
        loginType='register'
        className="transform"
        onClick={toggleRegister}
      >
        <TextPrimary white>Register</TextPrimary>
      </ButtonPrimary>
      {isRegisterOpen ? <Modal clearAll={clearAll} /> : null}
    </div>
  );
}
