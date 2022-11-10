import React from "react";

import Header from "./components/Header";
// import Slider from "./components/Slider";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  // const [searchValue, setSearchValue] = React.useState("");

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
      <Header
        onClickCart={() => setCartOpened(true)}
        // updateData={this.updateData}
      />
      {/* <Slider /> */}
      <div className="main-container">
        <h3>Товары</h3>
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
