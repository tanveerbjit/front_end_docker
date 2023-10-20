import ProductItem from "./ProductItem";
import React, { useContext } from "react";
import { ProductContext } from "../../../../App";

function ProductList() {
  const { book } = useContext(ProductContext);
  return (
    <div className="row pb-3">
      {book.products.map((product) => (
        <ProductItem product={product} key={product._id} />
      ))}
    </div>
  );
}

export default ProductList;
