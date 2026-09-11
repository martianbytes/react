import { Outlet } from "react-router"
import Navbar from "../Common/Navbar"
import Footer from "../Common/Footer"

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col min-h-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout;