import React, { useContext } from "react";
import { LoginContext } from "../../../../../store/login";

export default function FormTop() {
  const { isRegisterOpen, setRegisterOpen, setLoginOpen } = useContext(LoginContext);

  function clearAll() {
    setRegisterOpen(false);
    setLoginOpen(false);
  }
  return (
    <div className="flex flex-col justify-between lg:pb-8 pb-2">
      <button
        className="text-blue-800 absolute top-0 right-0 mr-4 mt-4 p-2 cursor-pointer lg:text-base text-base"
        onClick={clearAll}
      >
        X
      </button>
      {isRegisterOpen ? (
        <>
          <p className="text-blue-800 font-semibold pb-8 lg:text-base text-base">
            A job board catered to you!
          </p>
          <p className="text-blue-800 lg:text-base text-xs">
            By having a DevRebase account, you can favorite & keep track of all
            your possible job opportunites. Sign up in just seconds.
          </p>
        </>
      ) : (
        <>
          <p className="text-blue-800 font-semibold pb-8 lg:text-base text-base">
            Sign In
          </p>
          <p className="text-blue-800 lg:text-base text-xs">
            Thank you for having an account with us!
          </p>
        </>
      )}
    </div>
  );
}
