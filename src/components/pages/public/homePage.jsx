import TopBar from '../../topbar/TopBar'
import Navbar from '../../navbar/Navbar'
import MainBody from '../../home/main/mainBody'

import Footer from '../../footer/footer'
import Sidebar from '../../home/filter_bar/Sidebar';
import Product from '../../product/product';




function HomePage() {
   

  return (
    <>
   
  
      <TopBar/>
      <Navbar/>

      <MainBody>
        <Sidebar/>
        <Product/>
      </MainBody>

      <Footer/>

    </>
  )
}

export default HomePage
