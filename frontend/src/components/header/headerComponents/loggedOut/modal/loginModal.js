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
      className="fixed flex w-full h-full bg-transparent shadow-lg top-0 left-0 right-0 bottom-0 bg-smoke-200 modal-translate"
      ref={wrapperRef}
    >
      <div className="flex relative content-center flex-wrap items-center self-center modal-translate h-80 min-h-80 lg:w-1/2 w-5/6 bg-white shadow rounded-sm p-8">
        <HeroArea />
        <LoginForm />
      </div>
    </div>
  );
}
