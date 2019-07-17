import React from "react";
import HeaderLeft from "./headerComponents/headerLeft";
import HeaderCenter from "./headerComponents/headerCenter";
import HeaderRight from "./headerComponents/headerRight";
import "../misc/reuseable.css";

function HeaderWrapper() {
  return (
    <nav className="bg-white relative flex justify-center h-20 items-center z-50 montserrat shadow">
      <div className="flex justify-around lg:w-5/6 w-11/12 items-center">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
      </div>
    </nav>
  );
}

export default HeaderWrapper;
