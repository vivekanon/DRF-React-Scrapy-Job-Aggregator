import React from "react";
import HeaderLeft from "./headerComponents/headerLeft";
import HeaderCenter from "./headerComponents/headerCenter";
import HeaderRight from "./headerComponents/headerRight";
import { Container } from "../shared/container";
import "../misc/reuseable.css";

function HeaderWrapper() {
  return (
    <nav className="bg-white relative flex justify-center h-20 items-center z-50 montserrat shadow">
      <Container>
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </Container>
    </nav>
  );
}

export default HeaderWrapper;
