import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import HeaderLeft from "./headerComponents/headerLeft";
import HeaderCenter from "./headerComponents/headerCenter";
import HeaderRight from "./headerComponents/headerRight";
import "./reuseable.css";

function Header({ siteTitle }) {
  return (
    <nav className="bg-white relative flex justify-around h-16 items-center z-50 montserrat">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
