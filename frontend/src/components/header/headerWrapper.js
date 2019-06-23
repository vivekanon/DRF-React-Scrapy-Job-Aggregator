import React from "react";
import HeaderLeft from "./headerComponents/headerLeft";
import HeaderCenter from "./headerComponents/headerCenter";
import HeaderRight from "./headerComponents/headerRight";
import "../misc/reuseable.css";

function HeaderWrapper() {
  return (
    <nav className="bg-white relative flex justify-around h-20 items-center z-50 montserrat shadow">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </nav>
  );
}

export default HeaderWrapper;
