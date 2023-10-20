import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoriesDropdown from './CategoriesDropdown';
import CartCount from './CartCount';
import UserIcon from '../topbar/UserIcon';
import Navigationlink from './Navigationlink';




function Navbar() {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className="container-fluid bg-dark mb-30 ">
      <div className="row px-xl-5">
        <CategoriesDropdown
          isCollapsed={isCollapsed}
          toggleCollapse={toggleCollapse}
        />
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
            <Link to="/" className="text-decoration-none d-block d-lg-none">
              <span
                className={`h1 text-uppercase text-${
                  isCollapsed ? "dark" : "light"
                } bg-${isCollapsed ? "light" : "primary"} px-2`}
              >
                Book
              </span>
              <span
                className={`h1 text-uppercase text-${
                  isCollapsed ? "light" : "dark"
                } bg-${isCollapsed ? "primary" : "light"} px-2 ml-n1`}
              >
                Shop
              </span>
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              onClick={toggleCollapse}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse justify-content-between ${
                isCollapsed ? "show" : ""
              }`}
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <Navigationlink />
              </div>
              <CartCount />
              <UserIcon />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
