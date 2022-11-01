import Cart from "./components/Cart";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Product from "./components/Product";

const arr = [
  {
    name: "Apple Iphone 11",
    memory: "64Gb",
    imgURL: "/img/iphone/iphone-11.jpeg",
    price: 49999,
  },
  {
    name: "Apple Iphone 12",
    memory: "128Gb",
    imgURL: "/img/iphone/iphone-12.jpeg",
    price: 79999,
  },
  {
    name: "Apple Iphone 13",
    memory: "256Gb",
    imgURL: "/img/iphone/iphone-13.jpeg",
    price: 89999,
  },
  {
    name: "Apple Iphone 14 Pro",
    memory: "512Gb",
    imgURL: "/img/iphone/iphone-14-pro.jpeg",
    price: 99999,
  },
  {
    name: "Apple Watch series8",
    imgURL: "/img/apple-watch/apple-watch-s8.jpeg",
    price: 49999,
  },
  {
    name: "Apple Watch Ultra",
    imgURL: "/img/apple-watch/apple-watch-ultra.jpeg",
    price: 129999,
  },
];

function App() {
  return (
    <div>
      <div className="overlay">
        <Cart />
      </div>
      <Header />
      <Slider />
      <div className="main-container">
        <h3>Все товары</h3>
        <div className="content">
          {arr.map((obj) => (
            <Product
              name={obj.name}
              memory={obj.memory}
              imgURL={obj.imgURL}
              price={obj.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
