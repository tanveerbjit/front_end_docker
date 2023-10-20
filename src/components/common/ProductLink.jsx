import React from "react";
import { Link } from "react-router-dom";

function ProductLink({
  to = null,
  className = null,
  payload = null,
  onClick = null,
  disabled = false, // Provide a default value
}) {
  if (disabled) {
    // If disabled is true, render a disabled button instead of a Link
    return (
      <button className={className} disabled={disabled} onClick={onClick}>
        {payload}
      </button>
    );
  } else {
    // Otherwise, render a Link
    return (
      <Link to={to} className={className} onClick={onClick}>
        {payload}
      </Link>
    );
  }
}

export default ProductLink;
