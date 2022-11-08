import React from "react";
import styles from "./Header.module.scss";
export default function Header(props) {
  const [searchOpen, setSearchOpen] = React.useState(false);

  const openSearch = () => {
    setSearchOpen(!searchOpen);
    // console.log("Open");
  };
  // const closeSearch = () => {
  //   setSearchOpen(!searchOpen);
  //   // console.log("Close");
  // };

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
          <input
            className={searchOpen ? null : styles.noSearchInput}
            onMouseOut={() => setTimeout(console.log("123"), 1000)}
          />
          <img
            width={30}
            height={30}
            src="/img/search-2.png"
            alt="search"
            className={styles.searchImg}
            onClick={openSearch}
          />
        </li>
        <li>
          <img
            width={40}
            height={30}
            onClick={props.onClickCart}
            src="/img/Cart3.png"
            alt="cart"
          />
        </li>
      </div>
    </div>
  );
}
