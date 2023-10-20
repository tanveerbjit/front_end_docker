import React from 'react'
import TopBar from '../../topbar/TopBar'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/footer'
import UserDashboard from '../../dashboard/user/UserDashboard'
import UserProfile from '../../dashboard/common/profile/UserProfile'
//import "../../../assets/css/need.css";




function UserProfilePage() {
  return (
    
    <>
    
      <TopBar/>
      <Navbar/>
      <UserDashboard>
        <UserProfile/>
      </UserDashboard>
      {/* <Footer/> */}

    </>
  )
}

export default UserProfilePage