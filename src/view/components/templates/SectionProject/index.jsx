import React from "react";
import UI from "../../UI";

import styles from "./index.module.scss";

const SectionProject = ({ title, description, urlToProject, urlToBgImage }) => {
  return (
    <section
      style={{
        background: `url(${urlToBgImage}) no-repeat center/cover`,
      }}
      className={styles.root}
    >
      <div className={styles.layout} />
      <div className={styles.content + " container"}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <a className={styles.link} href={urlToProject}>
          <UI.Button>view project</UI.Button>
        </a>
      </div>
    </section>
  );
};

export default SectionProject;
