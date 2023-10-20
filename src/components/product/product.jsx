import React, { useContext } from "react";
import { ProductContext } from "../../App";
import ProductSorting from "../home/main/sort/ProductSorting";
import ProductList from "../home/main/product/ProductList";
import ProductPagination from "../home/main/pagination/ProductPagination";
import Loader from "../common/Loader";

function Product() {
  const { book, isLoading, error, isDataLoading } = useContext(ProductContext);

  return (
    <div className="col-lg-9 col-md-8">
      <ProductSorting />
      {isLoading || isDataLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      ) : error ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>No Data Found</h3>
        </div>
      ) : book.products && book.products.length > 0 ? (
        <>
          <ProductList />
          <ProductPagination />
        </>
      ) : (
        <div>No products found.</div>
      )}
    </div>
  );
}

export default Product;
