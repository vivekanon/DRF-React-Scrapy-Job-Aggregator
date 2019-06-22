import React from "react";
import HeaderLeft from "./headerComponents/headerLeft";
import HeaderCenter from "./headerComponents/headerCenter";
import HeaderRight from "./headerComponents/headerRight";
import "../misc/reuseable.css";

function HeaderWrapper() {
  return (
    <nav className="bg-white relative flex justify-around h-16 items-center z-50 montserrat">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </nav>
  );
}

export default HeaderWrapper;
