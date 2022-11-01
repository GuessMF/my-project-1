import React from "react";
import styles from "./Product.module.scss";

export default function Product(props) {
  return (
    <div className={styles.product}>
      <img width={110} height={130} src={props.imgURL} alt="prodImg" />
      <div>
        <p className={styles.productName}>{props.name}</p>
        <p className={styles.productMemory}>{props.memory}</p>
        <p className={styles.productPrice}>
          Цена: <b>{props.price}</b>{" "}
          <img width={25} height={15} src="/img/Cart.png" alt="cart" />
        </p>
      </div>
    </div>
  );
}
