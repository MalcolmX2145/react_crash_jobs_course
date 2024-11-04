import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet /> {/* This is where page-specific content goes */}
        <ToastContainer />
    </>
  )
}

export default MainLayout;