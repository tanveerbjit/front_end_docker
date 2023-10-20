import React from "react";
import { Link } from "react-router-dom";
import Navigationlink from "./Navigationlink";

function MainNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <Navigationlink />
      </div>
    </nav>
  );
}

export default MainNav;
