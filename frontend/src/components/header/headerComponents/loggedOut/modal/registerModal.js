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
      className="fixed flex w-full h-full bg-transparent shadow-lg left-0 top-0 bottom-0 right-0 bg-smoke-200 modal-translate"
      ref={RegisterWrapperRef}
    >
      <div className="flex relative content-center flex-wrap  items-center self-center modal-translate modal-size  lg:w-1/2 w-5/6 bg-white shadow rounded-sm">
        <HeroArea />
        <RegisterForm />
      </div>
    </div>
  );
}
