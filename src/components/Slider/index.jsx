import React from "react";
import styles from "./Slider.module.scss";

export default function Slider() {
  return (
    <div className={styles.slider}>
      <div className={styles.sliderMainInfo}>
        <h2>The new phones are here take a look.</h2>
        <p>
          info info info info info info info info info info info info info info
          info info info info
        </p>
        <button>Explore</button>
      </div>
      <img width={500} height={400} src="/img/slider-main.png" alt="slider" />
    </div>
  );
}
