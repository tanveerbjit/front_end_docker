import { useState } from "react";
import axiosInstance from "../util/axiosInstance";
import { useSelector,useDispatch } from "react-redux";




function useFilterSortSearch() {
  let filter_api = "/product/all?";

  //// price related filter
  const price = useSelector((state) => state.price);

  if (price.price.start && price.price.end) {
    filter_api += `price_start=${price.price.start}&&price_end=${price.price.end}&&`;
  }

  //// category related filter
  const category = useSelector((state) => state.category);

  if (category.items.length > 0) {
    category.items.map((id) => {
      filter_api += `category[]=${id}&&`;
    });
  }

  //// author related filter
  const author = useSelector((state) => state.author);

  if (author.items.length > 0) {
    author.items.map((id) => {
      filter_api += `author[]=${id}&&`;
    });
  }

  //// publisher related filter
  const publisher = useSelector((state) => state.publisher);

  if (publisher.items.length > 0) {
    publisher.items.map((id) => {
      filter_api += `publisher[]=${id}&&`;
    });
  }

  //// rating related filter
  const rating = useSelector((state) => state.rating);

  if (rating.items.length > 0) {
    rating.items.map((id) => {
      filter_api += `rating[]=${id}&&`;
    });
  }

  ////  sorting
  const data = useSelector((state) => state.sort);

  if (data.sort.type) {
    filter_api += `${data.sort.type}=${data.sort.order}&&`;
  }

  //// page size
  const page_size = useSelector((state) => state.itemNumber);

  if (page_size.item) {
    filter_api += `page_size=${page_size.item}&&`;
  }

  //// searching
  const search = useSelector((state) => state.search);

  if (search.search !== "") {
    filter_api += `query=${search.search}&&`;
  }

  //// page number searching
  const page = useSelector((state) => state.page);

  if (page.page !== "") {
    filter_api += `page=${page.page}&&`;
  }
  

  return { filter_api };
}

export default useFilterSortSearch;
