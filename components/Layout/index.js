import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NavBar from "@components/Navbar";

function Layout({ children, title, className }) {
  return (
    <Fragment>
      <NavBar title={title} className={className} />
      <div >
        {children}
      </div>
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  className: PropTypes.string, // added validation for className
};

export default Layout;
