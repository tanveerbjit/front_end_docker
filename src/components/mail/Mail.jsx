import React from "react";
import { Link } from "react-router-dom";

function Mail() {
  const containerStyle = {
    border: "2px solid #333", // Dark gray border
    borderRadius: "10px", // Optional: Add rounded corners
    padding: "20px",
    marginTop: "20px",
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div style={containerStyle}>
            <div className="text-center">
              <i className="fas fa-envelope fa-5x text-warning"></i>
              <h1 className="mt-4">
                A Verification Mail Has Been Sent To Your Email
              </h1>
              <Link to="/login" className="btn btn-primary mt-4">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mail;
