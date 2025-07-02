import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Main
