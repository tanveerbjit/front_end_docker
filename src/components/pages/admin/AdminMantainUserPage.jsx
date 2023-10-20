import React from 'react'
import TopBar from '../../topbar/TopBar'
import Navbar from '../../navbar/Navbar'
import UserDashboard from '../../dashboard/user/UserDashboard'
import Users from '../../dashboard/admin/allUsers/Users';

//import Users from '../../dashboard/admin/product/allUsers/Users'






function AdminMantainUserPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <UserDashboard>
        <Users />
      </UserDashboard>
    </>
  );
}

export default AdminMantainUserPage;