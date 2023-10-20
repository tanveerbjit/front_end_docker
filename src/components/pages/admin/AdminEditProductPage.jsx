import React from 'react'
import TopBar from '../../topbar/TopBar'
import Navbar from '../../navbar/Navbar'
import UserDashboard from '../../dashboard/user/UserDashboard'
import Edit from '../../dashboard/admin/product/Edit'






function AdminEditProductPage() {
  return (
    
    <>
    
      <TopBar/>
      <Navbar/>
      <UserDashboard>
        <Edit/>
      </UserDashboard>

    </>
  )
}

export default AdminEditProductPage