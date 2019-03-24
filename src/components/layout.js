import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import useWindowScroll from "../lib/useWindowScroll";
import Header from "./header";

function Layout({ children }) {
  const { x, y } = useWindowScroll();
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
      render={data => (
        <div className="text-grey-darkest">
          <Header siteTitle={data.site.siteMetadata.title} />

          <div className="flex flex-col flex-1 md:justify-center w-full">
            {children}
          </div>

          <footer>
            <div className="flex flex-wrap items-center justify-center p-4 md:p-8">
              &copy; 2019 Dalpha Cabling AB
            </div>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
