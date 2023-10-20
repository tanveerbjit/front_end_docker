import React from 'react'
import TopBar from '../../topbar/TopBar'
import Navbar from '../../navbar/Navbar'
import UserDashboard from '../../dashboard/user/UserDashboard'
import Add from '../../dashboard/admin/product/Add'





function AdminAddProductPage() {
  return (
    
    <>
    
      <TopBar/>
      <Navbar/>
      <UserDashboard>
        <Add/>
      </UserDashboard>

    </>
  )
}

export default AdminAddProductPage