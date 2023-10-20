import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../App";

function CategoriesDropdown() {
  const { book } = useContext(ProductContext);
  const [isCollapsed, setCollapsed] = useState(false);
  const dropdownRef = useRef(null);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  // Close the menu when clicking outside of it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setCollapsed(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close the menu when clicking a menu item
  const handleMenuItemClick = (id) => {
    console.log("Category ID");
    console.log(id);
    setCollapsed(false);
  };

  return (
    <div className="col-lg-3 d-none d-lg-block" ref={dropdownRef}>
      <div
        className={`btn d-flex align-items-center justify-content-between ${
          isCollapsed ? "bg-primary" : "bg-primary"
        } w-100`}
        onClick={toggleCollapse}
        style={{ height: "65px", padding: "0 30px", cursor: "pointer" }}
      >
        <h6 className={`text-${isCollapsed ? "dark" : "dark"} m-0`}>
          <i
            className={`fa fa-${isCollapsed ? "angle-down" : "angle-up"} mr-2`}
          ></i>
          Categories
        </h6>
      </div>
      {isCollapsed && (
        <nav
          className={`position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light`}
          style={{ width: "calc(100% - 30px)", zIndex: "999" }}
        >
          <div className="navbar-nav w-100 border border-4 border-black">
            <div className="nav-item dropdown dropright">
              {/* Add your category links here */}
              {book.filter_data.category.map((element, index) => (
                <Link
                  className="nav-link dropdown-toggle"
                  onClick={() => handleMenuItemClick(element._id)}
                  key={index}
                >
                  {element.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

export default CategoriesDropdown;
