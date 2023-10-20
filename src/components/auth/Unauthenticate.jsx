import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function UnAuthenticate() {
  const navigate = useNavigate();
  const login = localStorage.getItem('login');

  useEffect(() => {
    if (login) {
      navigate('/user');
    }
  }, [login, navigate]);

  return (
    <div>
      {!login ? <Outlet /> : null}
    </div>
  );
}

export default UnAuthenticate;
