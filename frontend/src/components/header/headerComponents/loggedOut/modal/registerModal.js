import React, { useRef, useEffect } from "react";
import RegisterForm from "../forms/registerForm";
import HeroArea from "../heroArea";

export default function RegisterModal(props) {
  const RegisterWrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    if (
      RegisterWrapperRef.current &&
      !RegisterWrapperRef.current.contains(event.target)
    ) {
      props.clearAll();
    }
  };
  return (
    <div
      className="fixed flex w-full h-full bg-transparent shadow-lg pin-l pin-t pin-b pin-r bg-smoke-light modal-translate"
      ref={RegisterWrapperRef}
    >
      <div className="flex relative content-center flex-wrap items-center self-center modal-translate h-76 lg:w-1/2 w-5/6 bg-white shadow rounded-sm p-8">
      <HeroArea />
      <RegisterForm />
      </div>
    </div>
  );
}
