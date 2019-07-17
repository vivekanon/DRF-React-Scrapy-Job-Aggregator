import React, { useContext } from "react";
import { LoginContext } from "../../../../../store/login";
import { TextPrimary, TextSub } from "../../../../shared/text";

export default function FormTop() {
  const { isRegisterOpen, setRegisterOpen, setLoginOpen } = useContext(LoginContext);

  function clearAll() {
    setRegisterOpen(false);
    setLoginOpen(false);
  }
  return (
    <div className="flex flex-col justify-between lg:pb-8 pb-2">
      <button
        className="text-indigo-600 absolute top-0 right-0 mr-4 mt-4 p-2 cursor-pointer lg:text-base text-base"
        onClick={clearAll}
      >
        X
      </button>
      {isRegisterOpen ? (
        <>

        <TextPrimary indigo>
        Register
        </TextPrimary>
        <span className="pt-4" />
          <TextSub indigo>
          By having a DevRebase account, you can favorite & keep track of all
            your possible job opportunites. Sign up in just seconds.
          </TextSub>
   
        </>
      ) : (
        <>
        <TextPrimary indigo>
            Sign In
        </TextPrimary>
        <span className="pt-4" />
          <TextSub indigo>
          Thank you for having an account with us!
          </TextSub>
          
        </>
      )}
    </div>
  );
}
