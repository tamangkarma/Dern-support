
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Mainlayout = () => {
  return (
    <>
    <header>
        <Navbar/>
        <Sidebar/>
    </header>
    <main>
        <Outlet/>
    </main>
    <footer>
        <Footer/>
    </footer>
      
    </>
  )
}

export default Mainlayout
