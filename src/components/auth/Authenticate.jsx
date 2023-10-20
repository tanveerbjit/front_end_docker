import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function Authenticate() {
  const navigate = useNavigate();
  const login = localStorage.getItem('login');

  useEffect(() => {
    if (!login) {
      navigate('/login');
    }
  }, [login, navigate]);

  return (
    <div>
      {login ? <Outlet /> : null}
    </div>
  );
}

export default Authenticate;
