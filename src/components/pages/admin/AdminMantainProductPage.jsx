import React from 'react'
import TopBar from '../../topbar/TopBar'
import Navbar from '../../navbar/Navbar'
import UserDashboard from '../../dashboard/user/UserDashboard'
import Mantain from '../../dashboard/admin/product/Mantain'


function AdminMantainProductPage() {
  return (
    
    <>
    
      <TopBar/>
      <Navbar/>
      <UserDashboard>
        <Mantain/>
      </UserDashboard>

    </>
  )
}

export default AdminMantainProductPage