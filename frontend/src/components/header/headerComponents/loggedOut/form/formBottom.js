import React, { useContext } from "react";
import { LoginContext } from "../../../../../store/login";
import { TextPrimary } from "../../../../shared/text";
import { Button } from "../../../../shared/button";

export default function FormBottom() {
  const { setLoginOpen, isRegisterOpen, setRegisterOpen } = useContext(
    LoginContext
  );


  function toggleLogin() {
    setLoginOpen(prevIsLoginOpen => !prevIsLoginOpen);
    setRegisterOpen(prevIsRegisterOpen => !prevIsRegisterOpen);
  }
  function toggleRegister() {
    setRegisterOpen(prevIsRegisterOpen => !prevIsRegisterOpen);
    setLoginOpen(prevIsLoginOpen => !prevIsLoginOpen);
  }
  return (
    <div className="flex flex-col justify-between relative">

      {isRegisterOpen ? (
        <div className="flex content-center lg:pt-8 pt-2 w-full justify-between items-center">
        <TextPrimary indigo>Have an account already?</TextPrimary>
        <Button 
          border
          onClick={toggleLogin}>
          <TextPrimary
            indigo>
            Login
          </TextPrimary>
        </Button>
      </div>
      ) : (
        <div className="flex content-center lg:pt-8 pt-2 w-full justify-between items-center">
          <TextPrimary indigo>Don't have an account yet?</TextPrimary>
          <Button 
            border
            onClick={toggleRegister}>
            <TextPrimary
              indigo>
              Register
            </TextPrimary>
          </Button>
        </div>
      )}
    </div>
  );
}
