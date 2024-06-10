import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"







function MainLayout() {
  return (
    <>
    <Navbar/>
    <main className="site-container">
        <Outlet/>
    </main>
    {/* <Footer/> */}
    </>
  )
}

export default MainLayout