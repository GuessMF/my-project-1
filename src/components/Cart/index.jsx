import React from "react";
import styles from "./Cart.module.scss";

function Cart({products, closeCart}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h3>
          Корзина <span onClick={closeCart}>X</span>
        </h3>

        <hr />

        <div className={styles.items}>
          {products.map((obj) => (
            <div className={styles.productInCart}>
              <img
                width={65}
                height={80}
                // src={`url({$obj.imageURL})`}
                src={obj.imgURL}
                alt="iphone12"
              />
              <p>
                <h4>{obj.name}</h4>
                <span>
                  Цвет: <b>Color</b>
                </span>
                <span>
                  Память: <b>{obj.memory}Gb</b>
                </span>
                <span className={styles.spanPrice}>
                  Цена:
                  <b>{obj.price} P </b>
                </span>
              </p>
              <button>X</button>
            </div>
          ))}
        </div>

        <div className={styles.calculatingInCart}>
          <hr />
          <ul>
            <li>
              Цена <hr /> <b>189999 Р</b>
            </li>
            <li>
              Налог 5% <hr /> <b> 9498 Р</b>
            </li>
            <button>Оформить заказ</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cart;
