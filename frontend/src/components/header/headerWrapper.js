import React from "react";
import HeaderLeft from "./headerComponents/headerLeft";
import HeaderCenter from "./headerComponents/headerCenter";
import HeaderRight from "./headerComponents/headerRight";
import "../misc/reuseable.css";
import { SubContainer } from "../shared/container";

function HeaderWrapper() {
  return (
    <nav className="bg-white relative flex justify-center h-20 items-center z-50 montserrat shadow">
      <SubContainer white className="items-center">
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </SubContainer>
    </nav>
  );
}

export default HeaderWrapper;
