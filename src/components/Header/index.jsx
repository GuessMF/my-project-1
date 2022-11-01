import React from "react";
import styles from "./Header.module.scss";
export default function Header() {
  return (
    // <div className="header">
    <div className={styles.header}>
      <div className={styles.headerName}>
        <h1>Apple-shop</h1>
      </div>
      <div className={styles.headerMenu}>
        <li>All products</li>
        <li>Solutions</li>
        <li>About</li>
        <li>Support</li>
      </div>
      <div className={styles.headerSearchCart}>
        <li>
          <img width={30} height={30} src="/img/search-2.png" alt="search" />
        </li>
        <li>
          <img width={40} height={30} src="/img/Cart.png" alt="cart" />
        </li>
      </div>
    </div>
  );
}
