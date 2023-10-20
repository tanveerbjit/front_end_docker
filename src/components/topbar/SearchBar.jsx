import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../store/slices/home/search/searchingSlice";

function SearchBar() {
  const dispatch = useDispatch();

  const searching = (e) => {
    // Handling search
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search for products"
        onChange={searching}
      />
      <div className="input-group-append">
        <span className="input-group-text bg-transparent text-primary">
          <i className="fa fa-search"></i>
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
