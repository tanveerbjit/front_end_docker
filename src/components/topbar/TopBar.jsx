import React from "react";
import SearchBar from "./SearchBar";
import CustomerService from "./CustomerService";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setMessage } from "../../store/slices/message/messageSlice";
import { Link, useNavigate } from "react-router-dom";




function TopBar() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirectToHome = ()=>{
    const uniqueId = uuidv4();
    dispatch(setMessage(uniqueId))
    navigate('/')
  }
 
  return (
    <div className="container-fluid">
      <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
        <div className="col-lg-4">
          <span className=" btn text-decoration-none" onClick={redirectToHome}>
            <span className="h1 text-uppercase text-primary bg-dark px-2">
              Book
            </span>
            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
              Shop
            </span>
          </span>
        </div>
        <div className="col-lg-4 col-6 text-left">
          <SearchBar />
        </div>
        <CustomerService />
      </div>
    </div>
  );
}

export default TopBar;
