import React from "react";
import styles from "./Cart.module.scss";

function Cart() {
  return (
    <div className={styles.drawer}>
      <h3>Корзина</h3>
      <hr />
      <div className={styles.items}>
        <div className={styles.productInCart}>
          <img
            width={65}
            height={80}
            src="/img/iphone/iphone-12-1.jpg"
            alt="iphone12"
          />
          <p>
            <h4>Apple Iphone 12</h4>
            <span>
              Цвет: <b>Blue</b>
            </span>
            <span>
              Память: <b>64gb</b>
            </span>
            <span className={styles.spanPrice}>
              Цена:
              <b> 49999 P </b>
            </span>
          </p>
          <button>X</button>
        </div>

        <div className={styles.productInCart}>
          <img
            width={74}
            height={86}
            src="/img/iphone/iphone-14-pro.jpeg"
            alt="iphone14"
          />
          <p>
            <h4>Apple Iphone 14 pro</h4>

            <span>
              Цвет: <b>Space-grey</b>
            </span>

            <span>
              Память: <b>256gb</b>
            </span>

            <span className={styles.spanPrice}>
              Цена:
              <b> 139999 P </b>
            </span>
          </p>
          <button>X</button>
        </div>

        <div className={styles.productInCart}>
          <img
            width={65}
            height={80}
            src="/img/iphone/iphone-12-1.jpg"
            alt="iphone12"
          />
          <p>
            <h4>Apple Iphone 12</h4>

            <span>
              Цвет: <b>Blue</b>
            </span>

            <span>
              Память: <b>64gb</b>
            </span>

            <span className={styles.spanPrice}>
              Цена:
              <b> 49999 P </b>
            </span>
          </p>
          <button>X</button>
        </div>
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
  );
}

export default Cart;
