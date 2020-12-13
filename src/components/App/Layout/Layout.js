import React from "react";
import PropTypes from "prop-types";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
