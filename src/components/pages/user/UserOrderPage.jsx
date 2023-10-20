import React from 'react'
import TopBar from '../../topbar/TopBar'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/footer'

import DataTable from '../../dashboard/common/order/DataTable'
import UserDashboard from '../../dashboard/user/UserDashboard'
//import "../../../assets/css/need.css";
import ProductPagination from '../../home/main/pagination/ProductPagination'
import SearchBar from '../../topbar/SearchBar'






function UserOrderPage() {

  return (
    
    <>
    
      <TopBar/>
      <Navbar/>
      <UserDashboard>
        {/* <SearchBar/> */}
        <DataTable />
        <ProductPagination/>
      </UserDashboard>
      {/* <Footer/> */}

    </>
  )
}

export default UserOrderPage