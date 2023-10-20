import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSort } from "../../../../store/slices/home/sorting/sortingSlice";
import { setItemNumbre } from "../../../../store/slices/home/number_of_item/itemNumberSlice";
import { sortBy, limitPerPage } from "../../../../config/sortingConfig";
import Button from "../../../common/Button ";

function ProductSorting() {
  const [sortingDropdownVisible, setSortingDropdownVisible] = useState(false);
  const [showingDropdownVisible, setShowingDropdownVisible] = useState(false);
  const dispatch = useDispatch();

  const toggleSortingDropdown = (e) => {
    e.stopPropagation(); // Stop the event from propagating to the document
    setSortingDropdownVisible(!sortingDropdownVisible);
  };

  const toggleShowingDropdown = (e) => {
    e.stopPropagation(); // Stop the event from propagating to the document
    setShowingDropdownVisible(!showingDropdownVisible);
  };

  const handleSortingItemClick = (type, order) => {
    dispatch(setSort({ type, order }));
    setSortingDropdownVisible(false); // Close the sorting dropdown when an item is clicked
  };

  const handleShowingItemClick = (value) => {
    dispatch(setItemNumbre(value));
    setShowingDropdownVisible(false); // Close the showing dropdown when an item is clicked
  };

  useEffect(() => {
    const closeDropdownsOnClickOutside = () => {
      setSortingDropdownVisible(false);
      setShowingDropdownVisible(false);
    };

    document.addEventListener("click", closeDropdownsOnClickOutside);

    return () => {
      document.removeEventListener("click", closeDropdownsOnClickOutside);
    };
  }, []);

  return (
    <div className="col-12 pb-1">
      <div className="d-flex align-items-center justify-content-between mb-4">
        {/* Sorting options */}
        <div className="ml-2">
          <div className="btn-group">
            <Button
              type={"button"}
              className={"btn btn-sm btn-light dropdown-toggle"}
              onClick={toggleSortingDropdown}
              text={"Sorting"}
            />

            <div
              className={`dropdown-menu dropdown-menu-right ${
                sortingDropdownVisible ? "show" : ""
              }`}
            >
              {sortBy.map((element) => (
                <Link
                  className="dropdown-item"
                  onClick={() =>
                    handleSortingItemClick(element.value, element.order)
                  }
                >
                  {element.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="btn-group ml-2">
            <Button
              type={"button"}
              className={"btn btn-sm btn-light dropdown-toggle"}
              onClick={toggleShowingDropdown}
              text={"Showing"}
            />

            <div
              className={`dropdown-menu dropdown-menu-right ${
                showingDropdownVisible ? "show" : ""
              }`}
            >
              {limitPerPage.map((element, index) => (
                <Link
                  className="dropdown-item"
                  onClick={() => handleShowingItemClick(element)}
                  key={index}
                >
                  {element}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSorting;
