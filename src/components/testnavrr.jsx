import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../App';

function Navbar() {
  const [isCollapsed, setCollapsed] = useState(false);
  const {cart} = useContext(ProductContext);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className="container-fluid bg-dark mb-30">
      <div className="row px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a
            className={`btn d-flex align-items-center justify-content-between ${
              isCollapsed ? 'bg-primary' : 'bg-primary'
            } w-100 collapsed`}
            onClick={toggleCollapse}
            style={{ height: '65px', padding: '0 30px' }}
          >
            <h6 className={`text-${isCollapsed ? 'dark' : 'dark'} m-0`}>
              <i className="fa fa-bars mr-2"></i>Categories
            </h6>
            <i className={`fa ${isCollapsed ? 'fa-angle-down' : 'fa-angle-up'} text-${isCollapsed ? 'dark' : 'light'}`}></i>
          </a>
          <nav
            className={`position-absolute navbar navbar-vertical navbar-light align-items-start p-0 ${
              isCollapsed ? 'bg-light' : 'bg-dark'
            } collapse`}
            id="navbar-vertical"
            style={{ width: 'calc(100% - 30px)', zIndex: '999' }}
          >
            <div className="navbar-nav w-100">
              <div className="nav-item dropdown dropright">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  Dresses <i className="fa fa-angle-right float-right mt-1"></i>
                </a>
                <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                  <a href="" className="dropdown-item">
                    Men's Dresses
                  </a>
                  <a href="" className="dropdown-item">
                    Women's Dresses
                  </a>
                  <a href="" className="dropdown-item">
                    Baby's Dresses
                  </a>
                </div>
              </div>
              <a href="" className="nav-item nav-link">
                Shirts
              </a>
              <a href="" className="nav-item nav-link">
                Jeans
              </a>
              <a href="" className="nav-item nav-link">
                Swimwear
              </a>
              <a href="" className="nav-item nav-link">
                Sleepwear
              </a>
              <a href="" className="nav-item nav-link">
                Sportswear
              </a>
              <a href="" className="nav-item nav-link">
                Jumpsuits
              </a>
              <a href="" className="nav-item nav-link">
                Blazers
              </a>
              <a href="" className="nav-item nav-link">
                Jackets
              </a>
              <a href="" className="nav-item nav-link">
                Shoes
              </a>
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
            <a href="" className="text-decoration-none d-block d-lg-none">
              <span className={`h1 text-uppercase text-${isCollapsed ? 'dark' : 'light'} bg-${isCollapsed ? 'light' : 'primary'} px-2`}>Multi</span>
              <span className={`h1 text-uppercase text-${isCollapsed ? 'light' : 'dark'} bg-${isCollapsed ? 'primary' : 'light'} px-2 ml-n1`}>Shop</span>
            </a>
            <button type="button" className="navbar-toggler" onClick={toggleCollapse}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse justify-content-between ${isCollapsed ? 'show' : ''}`} id="navbarCollapse">
              <div className="navbar-nav mr-auto py-0">
                <a href="index.html" className="nav-item nav-link">
                  Home
                </a>
                <a href="shop.html" className={`nav-item nav-link ${isCollapsed ? 'active' : ''}`}>
                  Book Fair
                </a>
                <a href="detail.html" className="nav-item nav-link">
                  Discounted Books
                </a>
                
                <a href="contact.html" className="nav-item nav-link">
                  Contact
                </a>
              </div>
              <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                <a href="" className="btn px-0">
                  <i className="fas fa-heart text-primary fa-lg"></i>
                  <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
                </a>
              
                  <Link to={"/cart"}  className="btn px-0 ml-3"><i className="fas fa-shopping-cart text-primary fa-lg"></i>
                  <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>{cart}</span></Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
