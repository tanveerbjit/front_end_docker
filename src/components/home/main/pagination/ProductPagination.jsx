import React, { useContext, useState } from "react";
import { ProductContext } from "../../../../App";
import { useDispatch } from "react-redux";
import { setPage } from "../../../../store/slices/home/pagination/paginationSlice";
import Button from "../../../common/Button ";

function ProductPagination() {
  const { book } = useContext(ProductContext);
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePreviousPage = () => {
    if (book.currentPage > 1) {
      dispatch(setPage(book.currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (book.currentPage < book.totalPages) {
      dispatch(setPage(book.currentPage + 1));
    }
  };

  return (
    <div className="col-12">
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item`} onClick={handlePreviousPage}>
            <Button
              isSubmitting={isSubmitting}
              text={"Previous"}
              className={`btn page-link text-dark page-item ${
                book.currentPage === 1 ? "disabled" : ""
              } `}
            />
          </li>
          <li className="page-item">
            <a className="page-link">{book.currentPage}</a>
          </li>
          <li className={`page-item`} onClick={handleNextPage}>
            <Button
              isSubmitting={isSubmitting}
              text={"Next"}
              className={`btn page-link text-dark page-item ${
                book.currentPage === book.totalPages ? `disabled ` : ``
              } `}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ProductPagination;
