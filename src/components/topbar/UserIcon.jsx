import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../util/axiosInstance';
import {setPic} from '../../store/slices/user/profile/userProfileSlice';
import {setCart} from '../../store/slices/cart/cartSlice';





function UserIcon() {

  const user = useSelector(state => state.userProfile);

  const login = localStorage.getItem('login');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const redirectToDashboard = () => {
    navigate('/user');
    closeDropdown(); // Close the dropdown after navigating
  };

  const redirectToLogin = async () => {

    try {
       
      
      const response = await axiosInstance.get('/auth/logout');
      if (response.status === 200) {
        localStorage.removeItem("role");
        localStorage.removeItem("login");
        localStorage.removeItem("cart");
        dispatch(setPic(""))
        dispatch(setCart(0));
        navigate('/login');
      } else {
        console.error('Error fetching user profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }

     // Close the dropdown after navigating
  };

  // Add event listener to close the dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {login ? (
        <div className="profile dropdown">
          <button
            type="button"
            className="btn p-0 dropdown-toggle profile-btn"
            onClick={toggleDropdown}
          >
            <img
              src={
                user.pic !== ''
                  ? "http://127.0.0.1:3000/" + user.pic
                  : "https://valerehealthcare.co/web/front/assets/images/icon/default.png"
              }
              style={{ height: '30px', width: '30px' }}
              className="rounded-circle custom-rounded-image ml-2"
              alt="user"
            />
          </button>
          <div ref={dropdownRef}>
            <ul className={`dropdown-menu p-0 border-primary ${showDropdown ? 'show' : ''}`} style={{
              right: "auto",
              left: "-150%",
            }}>
              <li className="text-center">
                {/* Use button for Dashboard */}
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={redirectToDashboard}
                >
                  Dashboard
                </button>
              </li>
              <li className="text-center">
                {/* Use button for Logout */}
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={redirectToLogin}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="btn-group ml-3">
          <Link to="/login">
            <i className="fa-solid fa-user fa-lg"></i>
          </Link>
        </div>
      )}
    </>
  );
}

export default UserIcon;
