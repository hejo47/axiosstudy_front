import React from "react";

const ProductList = (props) => {
  return (
    <div>
      {props.list.map((item, idx) => {
        return (
          <div key={idx}>
            <img src={item.imgSrc} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
