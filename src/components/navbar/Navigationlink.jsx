import React, { useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../config/navConfig";

function Navigationlink() {
  return (
    <>
      {nav.map((element) => (
        <li className="nav-item active">
          <Link className="nav-link">{element}</Link>
        </li>
      ))}
    </>
  );
}

export default Navigationlink;
