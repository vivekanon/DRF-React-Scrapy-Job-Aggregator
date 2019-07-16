import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { ContextProvider } from "../../store/state";
import HeaderWrapper from "../header/headerWrapper";
import Footer from "../footer/footer";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      l
      render={data => (
        <div className="flex flex-col min-h-screen w-full">
          <ContextProvider>
            <HeaderWrapper siteTitle={data.site.siteMetadata.title} />
            <div className="flex flex-wrap bg-transparent w-full mx-auto ">
              {children}
            </div>
            <Footer />
          </ContextProvider>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
