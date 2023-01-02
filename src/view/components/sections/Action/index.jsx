import React from "react";
import UI from "../../UI";

import styles from "./index.module.scss";

const Action = () => {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Let's do something amazing.</h3>
      <p className={styles.description}>Contact me today</p>
      <a href="/">
        <UI.Button>Start a project</UI.Button>
      </a>
    </div>
  );
};

export default Action;
