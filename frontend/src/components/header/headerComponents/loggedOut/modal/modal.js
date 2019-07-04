import React from "react";
import LoginForm from "../logIn/loginForm";
import RegisterForm from "../register/registerForm";
import HeroArea from "../form/heroArea";

export default function Modal(props) {
  return (
    <div className="fixed flex w-full h-full bg-transparent shadow-lg top-0 left-0 right-0 bottom-0 bg-smoke-200 modal-translate">
      <div className="flex relative flex-wrap modal-translate modal-size lg:w-1/2 w-5/6 bg-white shadow rounded-sm ">
        <HeroArea />
        {props.loginType === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}
