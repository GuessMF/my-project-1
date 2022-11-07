import React from "react";
import styles from "./Product.module.scss";

export default function Product({imgURL, name, memory, price, onPlus}) {
  const [add, setAdd] = React.useState(false);

  const onClickPlus = () => {
    onPlus({name, memory, price});

    setAdd(!add);
    console.log("eeeee");
  };

  return (
    <div className={styles.product}>
      <img width={100} height={120} src={imgURL} alt="prodImg" />
      <div>
        <p className={styles.productName}>
          {name} {memory}
        </p>
        {/* <p className={styles.productMemory}{memory}</p> */}
        <p className={styles.productPrice}>
          Цена: <b>{price} Р</b>{" "}
        </p>
        <button
          className={add ? styles.addedToCart : styles.addToCart}
          onClick={add ? !onClickPlus : onClickPlus}
        >
          {add ? "В корзине" : "Добавить в корзину"}
          {/* <img
            width={15}
            height={15}
            onClick={onClickPlus}
            src={add ? "/img/added.png" : "/img/plus.png"}
            alt="add"
            className={add ? styles.added : styles.plus}
          /> */}
        </button>
      </div>
    </div>
  );
}
