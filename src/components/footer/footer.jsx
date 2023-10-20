import React from 'react';

function Footer() {
  return (
    <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
      <div className="row px-xl-5 pt-5">
        <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
          <h5 className="mb-4">Get In Touch</h5>
          <p className="mb-4">
            This book shop is developed and mantained by Md. Tanveer Ahmed
          </p>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope text-primary mr-3"></i>info@example.com
          </p>
          <p className="mb-0">
            <i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
