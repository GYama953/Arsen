import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import LoadingScreen from './LoadingScreen'
import { motion } from 'framer-motion'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <LoadingScreen />
      <Navbar />
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  )
}

export default Layout