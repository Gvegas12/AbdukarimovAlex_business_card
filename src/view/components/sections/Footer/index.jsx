import React from "react";

import styles from "./index.module.scss";

const contactsNavList = [
  {
    to: "/",
    text: "Instagram",
  },
  {
    to: "/",
    text: "Twitter",
  },
  {
    to: "/",
    text: "Telegram",
  },
  {
    to: "/",
    text: "Facebook",
  },
];

const Footer = () => {
  return (
    <footer className={styles.root}>
      <p>
        <span style={{ color: "#ffffff82" }}>Design:</span> © 2022 Paper. Made
        with <span style={{ color: "red" }}>&#10084;</span> Webflow, by Kreshnik
        Beqi
      </p>
      <nav>
        <ul className={styles.footerNavList}>
          {contactsNavList.map(({ to, text }, i) => (
            <li key={i} className={styles.footerNavItem}>
              <a className={styles.footerNavLink} href={to}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
