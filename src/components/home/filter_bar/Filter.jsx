import FilterItem from "./FilterItem";
import CommonFilterItem from "./CommonFilteItem";
import FilterHeader from "./FilterHeader";
import React, { useContext } from "react";
import { ProductContext } from "../../../App";
import PriceRangeSlider from "../price_filter/PriceRangeSlider";
import Loader from "../../common/Loader";
import { Link } from "react-router-dom";

function Filter() {
  const { book, isLoading, error } = useContext(ProductContext);
  let entries = [];

  if (!isLoading) {
    entries = Object.entries(book.filter_data);
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : book.products && book.products.length > 0 ? (
        <>
          <FilterHeader header={"Price"} />
          <PriceRangeSlider />
          {entries.map((element, i) => (
            <>
              <FilterHeader header={element[0]} key={i} />

              <div className="bg-light p-4 mb-30">
                {element[1].map((item, j) => (
                  <FilterItem item={item} key={j} filter={element[0]} />
                ))}
              </div>
            </>
          ))}
        </>
      ) : (
        <div>No Filter found.</div>
      )}
    </>
  );
}

export default Filter;
