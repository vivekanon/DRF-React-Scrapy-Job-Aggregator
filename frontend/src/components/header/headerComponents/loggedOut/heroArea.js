import React, { useContext } from "react";
import { LoginContext } from "../../../../store/login";
import HumanBG from "../../../../images/human.png";

export default function HeroArea() {
  const { isLoginOpen, isRegisterOpen } = useContext(LoginContext);
  return (
    <div className="flex flex-col lg:w-1/2 w-full">
      <div className="flex justify-center">
        <h2 className="text-blue-800">{isLoginOpen ? "Login" : "Register"}</h2>
      </div>
      <div className="lg:flex hidden justify-center items-center ">
        <img className="bg-auto w-1/2" src={HumanBG} alt="hero image" />
      </div>
    </div>
  );
}
