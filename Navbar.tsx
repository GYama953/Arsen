import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-noir-background/95 backdrop-blur-md py-4 shadow-premium' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-white font-display text-2xl tracking-tight">APEX</span>
          <span className="text-noir-gold ml-1 font-display text-2xl">.</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink to="/" className={({isActive}) => isActive ? 'active-nav-link nav-link' : 'nav-link'}>
            Главная
          </NavLink>
          <NavLink to="/search" className={({isActive}) => isActive ? 'active-nav-link nav-link' : 'nav-link'}>
            Поиск
          </NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? 'active-nav-link nav-link' : 'nav-link'}>
            База
          </NavLink>
          <NavLink to="/contact" className="btn-primary">
            Контакты
          </NavLink>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-noir-text hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-noir-container absolute top-full left-0 w-full shadow-premium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({isActive}) => isActive ? 'active-nav-link nav-link' : 'nav-link'}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Главная
            </NavLink>
            <NavLink 
              to="/search" 
              className={({isActive}) => isActive ? 'active-nav-link nav-link' : 'nav-link'}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Поиск
            </NavLink>
            <NavLink 
              to="/services" 
              className={({isActive}) => isActive ? 'active-nav-link nav-link' : 'nav-link'}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              База
            </NavLink>
            <NavLink 
              to="/contact" 
              className="btn-primary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Контакты
            </NavLink>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Navbar