import React, { useEffect, useRef } from "react";
import LoginForm from "../forms/loginForm";
import HeroArea from "../heroArea";

export default function LoginModal(props) {
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
    <div
      className="fixed flex w-full h-full bg-transparent shadow-lg pin-l pin-t pin-b pin-r bg-smoke-light modal-translate"
      ref={wrapperRef}
    >
      <div className="flex relative content-center flex-wrap items-center self-center modal-translate h-76 lg:w-1/2 w-5/6 bg-white border-2 rounded-sm p-8">
        <HeroArea />
        <LoginForm />
      </div>
    </div>
  );
}
