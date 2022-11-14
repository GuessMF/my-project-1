import React from "react";
import axios from "axios";
import Header from "./components/Header";
// import Slider from "./components/Slider";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  // const [searchValue, setSearchValue] = React.useState("");

  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearhInput = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
  };

  React.useEffect(() => {
    axios
      .get("https://6367cafad1d09a8fa61aa550.mockapi.io/products")
      .then((res) => setProducts(res.data));
    axios
      .get("https://6367cafad1d09a8fa61aa550.mockapi.io/cart")
      .then((res) => setCartProducts(res.data));
  }, []);

  const addToCart = (obj) => {
    axios.post("https://6367cafad1d09a8fa61aa550.mockapi.io/cart", obj);
    setCartProducts((prev) => [...prev, obj]);
  };

  const removeFromCart = (id) => {
    console.log("deleted");
    // axios.delete(`https://6367cafad1d09a8fa61aa550.mockapi.io/cart${id}`);
    setCartProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div>
      {cartOpened && (
        <Cart
          products={cartProducts}
          closeCart={() => setCartOpened(false)}
          removeFromCart={removeFromCart}
        />
      )}
      <Header
        onClickCart={() => setCartOpened(true)}
        onClickSearch={() => setSearchOpen(!searchOpen)}
        searchOpen={searchOpen}
        onClickClose={() => setSearchValue("")}
        searchValue={searchValue}
        onChangeSearhInput={onChangeSearhInput}
      />
      {/* <Slider /> */}
      <div className="main-container">
        <h3>{!searchValue ? "Товары" : "Поиск по названию:" + searchValue}</h3>
        <div className="content">
          {products
            .filter((product) => product.name.includes(searchValue))
            .map((products) => (
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
