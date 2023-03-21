import "./App.css";
import ProductList from "./components/ProductList";

const productlistfront = [
  {
    name: "abc초코",
    price: 4000,
    imgSrc: "https://img.danawa.com/prod_img/500000/776/563/img/3563776_1.jpg?shrink=330:*&_v=20170202162018",
  },
  {
    name: "쿠크다스",
    price: 5000,
    imgSrc: "https://img.danawa.com/prod_img/500000/693/997/img/6997693_1.jpg?shrink=330:*&_v=20190123165143",
  },
];
function App() {
  return (
    <div className='App'>
      <ProductList list={productlistfront}></ProductList>
    </div>
  );
}

export default App;
