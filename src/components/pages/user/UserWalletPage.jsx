import React from 'react'
import TopBar from '../../topbar/TopBar'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/footer'

import DataTable from '../../dashboard/common/order/DataTable'
import UserDashboard from '../../dashboard/user/UserDashboard'

import Amount from "../../dashboard/user/wallet/Amount"





function UserWalletPage() {

  return (
    
    <>
    
      <TopBar/>
      <Navbar/>
      <UserDashboard>
       
        <Amount />
      
      </UserDashboard>
      {/* <Footer/> */}

    </>
  )
}

export default UserWalletPage