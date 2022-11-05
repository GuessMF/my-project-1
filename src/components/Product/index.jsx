import React from "react";
import styles from "./Product.module.scss";

export default function Product(props) {
  const [add, setAdd] = React.useState(false);

  const onClickButton = () => {
    setAdd(!add);
    console.log("eeeee");
  };

  return (
    <div className={styles.product}>
      <img width={110} height={130} src={props.imgURL} alt="prodImg" />
      <div>
        <p className={styles.productName}>{props.name}</p>
        <p className={styles.productMemory}>{props.memory}</p>
        <p className={styles.productPrice}>
          Цена: <b>{props.price}</b>{" "}
          <img
            width={10}
            height={10}
            onClick={onClickButton}
            src={add ? "/img/added.png" : "/img/plus.png"}
            alt="add"
          />
        </p>
      </div>
    </div>
  );
}
