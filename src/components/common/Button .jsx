import React from "react";

const Button = ({ isSubmitting = null, text, className, payload=null, onClick=null, type="submit"}) => {
  return (
    <button
      className={className}
      type={type}
      disabled={isSubmitting}
      onClick={onClick}
    >
      {payload ? payload : ""}
      {isSubmitting ? "Processing..." : text}
    </button>
  );
};

export default Button;
