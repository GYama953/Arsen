import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import Search from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import PageTransition from './components/PageTransition'

function App() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <PageTransition>
              <Home />
            </PageTransition>
          } />
          <Route path="search" element={
            <PageTransition>
              <Search />
            </PageTransition>
          } />
          <Route path="services" element={
            <PageTransition>
              <Services />
            </PageTransition>
          } />
          <Route path="contact" element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App