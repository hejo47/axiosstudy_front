import axios from "axios";
import { useEffect, useState } from "react";

const url = "http://localhost:8080/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        const products = result.data.products;
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {products.map((product, idx) => {
        return (
          <div key={idx}>
            <img src={product.imgSrc} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
          // <p>경호사랑</p>
        );
      })}
    </div>
  );
};

export default ProductList;
