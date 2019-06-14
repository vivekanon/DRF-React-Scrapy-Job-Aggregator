import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import HeaderLeft from "./headerComponents/headerLeft";
import HeaderCenter from "./headerComponents/headerCenter";
import HeaderRight from "./headerComponents/headerRight";
import "../misc/reuseable.css";

function HeaderWrapper({ siteTitle }) {
  return (
    <nav className="bg-white relative flex justify-around h-16 items-center z-50 montserrat">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </nav>
  );
}

HeaderWrapper.propTypes = {
  siteTitle: PropTypes.string
};

HeaderWrapper.defaultProps = {
  siteTitle: ``
};

export default HeaderWrapper;
