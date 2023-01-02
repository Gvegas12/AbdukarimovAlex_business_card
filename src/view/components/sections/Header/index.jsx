import React from "react";

import styles from "./index.module.scss";

const navItems = [
  {
    to: "/",
    text: "Works",
  },
  {
    to: "/",
    text: "About",
  },
  {
    to: "/",
    text: "Blog",
  },
  {
    to: "/",
    text: "Contacts",
  },
];

const Header = () => {
  const [burgerIsActive, setBurgerIsActive] = React.useState(false);
  const burgerRef = React.useRef(null);
  const closeRef = React.useRef(null);

  const onClickBurger = () => {
    burgerRef.current.style.display = "none";
    closeRef.current.style.display = "block";
    setBurgerIsActive(true);
  };
  const onClickClose = () => {
    burgerRef.current.style.display = "block";
    closeRef.current.style.display = "none";
    setBurgerIsActive(false);
  };

  return (
    <header className={styles.root}>
      <button
        onClick={onClickClose}
        ref={closeRef}
        style={{ display: "none" }}
        className={styles.close}
      >
        <svg width="40px" height="40px" viewBox="0 0 48 48">
          <g fill="#ffffff">
            <g>
              <rect width="48" height="48" fill="none" />
            </g>
            <g>
              <path d="M26.8,24,37.4,13.5a2.1,2.1,0,0,0,.2-2.7,1.9,1.9,0,0,0-3-.2L24,21.2,13.4,10.6a1.9,1.9,0,0,0-3,.2,2.1,2.1,0,0,0,.2,2.7L21.2,24,10.6,34.5a2.1,2.1,0,0,0-.2,2.7,1.9,1.9,0,0,0,3,.2L24,26.8,34.6,37.4a1.9,1.9,0,0,0,3-.2,2.1,2.1,0,0,0-.2-2.7Z" />
            </g>
          </g>
        </svg>
      </button>
      <button onClick={onClickBurger} ref={burgerRef} className={styles.burger}>
        <svg width="40px" height="40px" viewBox="0 0 28 28" fill="none">
          <path
            d="M3 7C3 6.44771 3.44772 6 4 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H4C3.44772 8 3 7.55229 3 7Z"
            fill="#ffffff"
          />
          <path
            d="M3 14C3 13.4477 3.44772 13 4 13H24C24.5523 13 25 13.4477 25 14C25 14.5523 24.5523 15 24 15H4C3.44772 15 3 14.5523 3 14Z"
            fill="#ffffff"
          />
          <path
            d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H24C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20H4Z"
            fill="#ffffff"
          />
        </svg>
      </button>
      <nav className={styles.nav}>
        <div className={styles.logo}>Paper</div>
        <ul
          style={{ display: burgerIsActive && "flex" }}
          className={styles.navList}
        >
          {navItems.map(({ to, text }, i) => (
            <li key={i} className={styles.navItem}>
              <a href={to}>{text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
