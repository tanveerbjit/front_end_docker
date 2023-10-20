import TopBar from '../../topbar/TopBar'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/footer'
import RegistrationForm from '../../registration/registration'
import AdminRegistrationForm from '../../registration/AdminRegistration'




function AdminRegistrationPage() {
  

  return (
    <>
      <TopBar/>
      <Navbar/>
      <AdminRegistrationForm/>
      {/* <Footer/> */}
    </>
  )
}

export default AdminRegistrationPage
