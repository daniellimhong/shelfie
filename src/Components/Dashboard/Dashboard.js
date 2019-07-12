import React from "react";
import Product from "../Product/Product";

export default function Dashboard(props) {
  console.log(props);
  let mappedProducts = props.inventory.map(product => {
    return (
    <Product 
    inventory={props.inventory} 
    product={product}
    />
    )
  });

  return <div>{mappedProducts}</div>;
}
