// UserDashboard.js
import React from 'react';
import Sidebar from './Sidebar';

function UserDashboard({ children }) {
  return (
    <>
      <div className='user_dashboard'>
        <section className="docboard-bg">
          <div className="container-fluid">
            <div className="row">
              <Sidebar />
              <div className="col-10 col-sm-11 col-md-11 col-lg-10">
              <div className="rounded-2 py-3 px-2  shadow border border-primary" style={{ backgroundColor: '#fcfbf5', border: '1px solid #444541' }}>
                <div className="row align-items-center justify-content-center container-fluid">
                  

                   {children}

                </div>
              </div>
    </div>
             
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default UserDashboard;
