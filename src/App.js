function App() {
  return (
    <div>
      <div className="overlay">
        <div className="drawer">
          <h3>Корзина</h3>
          <hr />
          <div className="product-in-cart">
            <img width={74} height={86} src="/img/iphone/iphone-12.jpeg" />
            <p>
              <h4>Apple Iphone 12</h4>

              <span>
                Цвет: <b>Blue</b>
              </span>

              <span>
                Память: <b>64gb</b>
              </span>

              <span className="span-price">
                Цена:
                <b> 49999 P </b>
              </span>
            </p>
            <button>X</button>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="header-name">
          <h1>Apple-shop</h1>
        </div>
        <div className="header-menu">
          <li>All products</li>
          <li>Solutions</li>
          <li>About</li>
          <li>Support</li>
        </div>
        <div className="header-search-cart">
          <li>
            <img width={30} height={30} src="/img/search-2.png" />
          </li>
          <li>
            <img width={40} height={30} src="/img/Cart.png" />
          </li>
        </div>
      </div>

      <div className="slider">
        <div className="slider-main-info">
          <h2>The new phones are here take a look.</h2>
          <p>
            info info info info info info info info info info info info info
            info info info info info
          </p>
          <button className="slider-main-button">Explore</button>
        </div>
        <img width={500} height={400} src="/img/slider-main.png" />
      </div>
      <div className="main-container">
        <h3>Все товары</h3>
        <div className="content">
          <div className="product">
            <img width={110} height={130} src="/img/iphone/iphone-11.jpeg" />
            <p>Apple Iphone 11 64gb</p>

            <span>
              {" "}
              Цена:
              <b> 49999 P </b>
              <img width={25} height={15} src="/img/Cart.png" />
            </span>
          </div>

          <div className="product">
            <img width={110} height={130} src="/img/iphone/iphone-12.jpeg" />
            <p>Apple Iphone 12 64gb</p>
            <span>
              {" "}
              Цена:
              <b> 49999 P </b>
              <img width={25} height={15} src="/img/Cart.png" />
            </span>
          </div>

          <div className="product">
            <img width={110} height={130} src="/img/iphone/iphone-13.jpeg" />
            <p>Apple Iphone 13 64gb</p>

            <span>
              {" "}
              Цена:
              <b> 49999 P </b>
              <img width={25} height={15} src="/img/Cart.png" />
            </span>
          </div>

          <div className="product">
            <img
              width={110}
              height={130}
              src="/img/iphone/iphone-14-pro.jpeg"
            />
            <p>Apple Iphone 14 pro 64gb</p>

            <span>
              {" "}
              Цена:
              <b> 49999 P </b>
              <img width={25} height={15} src="/img/Cart.png" />
            </span>
          </div>

          <div className="product">
            <img
              width={110}
              height={130}
              src="/img/apple-watch/apple-watch-ultra.jpeg"
            />
            <p>Apple Watch Ultra</p>

            <span>
              {" "}
              Цена:
              <b> 49999 P </b>
              <img width={25} height={15} src="/img/Cart.png" />
            </span>
          </div>

          <div className="product">
            <img
              width={110}
              height={130}
              src="/img/apple-watch/apple-watch-s8.jpeg"
            />
            <p>Apple Watch series 8</p>

            <span>
              {" "}
              Цена:
              <b> 49999 P </b>
              <img width={25} height={15} src="/img/Cart.png" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
