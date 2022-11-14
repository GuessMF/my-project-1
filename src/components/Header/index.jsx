import React from "react";
import styles from "./Header.module.scss";
export default function Header(props) {
  // const [searchOpen, setSearchOpen] = React.useState(false);
  // const [searchValue, setSearchValue] = React.useState("");

  // const openSearch = () => {
  //   setSearchOpen(!searchOpen);
  // };

  // const onChangeSearhInput = (event) => {
  //   setSearchValue(event.target.value);
  //   console.log(searchValue);
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
          <span className={props.searchOpen ? null : styles.noSearchInput}>
            <input
              // className={searchOpen ? null : styles.noSearchInput}
              // onMouseOut={() => setTimeout(() => setSearchValue(""), 1000)}
              onChange={props.onChangeSearhInput}
              value={props.searchValue}
            />
            <button
              onClick={props.onClickClose}
              //onClick={() => setSearchValue("")}
            >
              X
            </button>
          </span>
          <img
            width={30}
            height={30}
            src="/img/search-2.png"
            alt="search"
            className={styles.searchImg}
            onClick={props.onClickSearch}
          />
        </li>
        <li>
          <img
            width={40}
            height={30}
            onClick={props.onClickCart}
            // onClick={console.log(props.searchVisible)}
            className={styles.cartImg}
            src="/img/Cart3.png"
            alt="cart"
          />
        </li>
      </div>
    </div>
  );
}
