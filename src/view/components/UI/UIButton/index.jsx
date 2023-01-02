import React from "react";

import styles from "./index.module.scss";

const UIButton = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={styles.root + " " + className}>
      {children}
    </button>
  );
};

export default UIButton;
