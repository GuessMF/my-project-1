import React from "react";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Product from "./components/Product";
import Cart from "./components/Cart";

// const arr = [
//   {
//     name: "Apple Iphone 11",
//     memory: "64Gb",
//     imgURL: "/img/iphone/iphone-11.jpeg",
//     price: 49999,
//   },
//   {
//     name: "Apple Iphone 12",
//     memory: "128Gb",
//     imgURL: "/img/iphone/iphone-12.jpeg",
//     price: 79999,
//   },
//   {
//     name: "Apple Iphone 13",
//     memory: "256Gb",
//     imgURL: "/img/iphone/iphone-13.jpeg",
//     price: 89999,
//   },
//   {
//     name: "Apple Iphone 14 Pro",
//     memory: "512Gb",
//     imgURL: "/img/iphone/iphone-14-pro.jpeg",
//     price: 99999,
//   },
//   {
//     name: "Apple Watch series8",
//     imgURL: "/img/apple-watch/apple-watch-s8.jpeg",
//     price: 49999,
//   },
//   {
//     name: "Apple Watch Ultra",
//     imgURL: "/img/apple-watch/apple-watch-ultra.jpeg",
//     price: 129999,
//   },
// ];

function App() {
  const [products, setProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://6367cafad1d09a8fa61aa550.mockapi.io/products")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setProducts(json);
      });
  }, []);
  const addToCart = (obj) => {
    setCartProducts((prev) => [...prev, obj]);
  };

  return (
    <div>
      {cartOpened && (
        <Cart products={cartProducts} closeCart={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Slider />
      <div className="main-container">
        <h3>Все товары</h3>
        <div className="content">
          {products.map((products) => (
            <Product
              key={products.id}
              name={products.name}
              memory={products.memory}
              imgURL={products.imgURL}
              price={products.price}
              onPlus={(obj) => addToCart(products)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
