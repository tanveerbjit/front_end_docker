
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function Sidebar() {
  
  const [bar, setBar] = useState([]);

  const role = localStorage.getItem("role");

  let sideBar = [
    { route: "/user", title: "My Profile", icon: (<i className="fa-solid fa-user"></i>) },
    // { route: "/user/setting", title: "Setting", icon: (<i className="fa-solid fa-gear"></i>) },
  ];

  if (role === 'u') {
    sideBar.push({ route: "/user/purchase", title: "Purchase", icon: (<i className="fa-solid fa-bag-shopping"></i>) });
    sideBar.push({ route: "/user/wallet", title: "Wallet", icon: (<i className="fa-solid fa-money-bill"></i>) });
  } else if (role === 'a') {
    // Add admin routes here if needed
    sideBar.push({ route: "/user/all/user", title: "Users", icon: (<i class="fa-solid fa-users"></i>) });
    //sideBar.push({ route: "/user/all/admin", title: "Admins", icon: (<i class="fa-solid fa-people-roof"></i>) });
    //sideBar.push({ route: "/user/all/cart", title: "Carts", icon: (<i class="fa-solid fa-cart-shopping"></i>) });
    sideBar.push({ route: "/user/purchase", title: "Orders", icon: (<i className="fa-solid fa-bag-shopping"></i>) });
    //sideBar.push({ route: "/user/all/ban", title: "Ban", icon: (<i class="fa-solid fa-ban"></i>) });
    //sideBar.push({ route: "/user/all/upgrade", title: "Upgrade", icon: (<i class="fa-solid fa-person"></i>) });
    sideBar.push({ route: "/user/all/product", title: "Products", icon: (<i class="fa-brands fa-product-hunt"></i>) });
    <i class="fa-brands fa-product-hunt"></i>
  }

  useEffect(() => {
    setBar(sideBar);
  }, []);

  return (
    <div className="col-2 col-sm-1 col-md-1 col-lg-2 ps-0 pe-0 pe-lg-3">
      <div className="side-bar side-bar-two position-sticky docboard-bg-soft d-none d-md-none d-lg-block side-bar-border">
        <ul className="list-group">
          {bar.map((element, index) => (
            <li className="list-group-item item-border side-bar-content-border" key={index}>
              <Link to={element.route} className="d-block w-100 sidebar-content-color text-decoration-none">
                <span className="me-1">
                  {element.icon}
                </span>
                <span className="text-gray-dark pl-3">{element.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
