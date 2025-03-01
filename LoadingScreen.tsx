import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Simulate loading time and then fade out
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500) // Adjust timing as needed
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 bg-noir-background z-50 flex flex-col items-center justify-center"
        >
          <motion.div 
            className="relative mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-white font-display text-4xl tracking-tight">
              APEX<span className="text-noir-gold">.</span>
            </div>
            
            {/* Gold accent line */}
            <motion.div 
              className="absolute -bottom-4 left-0 h-px w-0 bg-noir-gold"
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
            />
          </motion.div>
          
          {/* Animated loader */}
          <div className="relative">
            {/* Outer circle */}
            <motion.div 
              className="w-16 h-16 rounded-full border-2 border-noir-gold/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner circle with gradient */}
            <motion.div 
              className="absolute top-0 left-0 w-16 h-16 rounded-full border-t-2 border-r-2 border-noir-gold"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-noir-gold rounded-full" />
          </div>
          
          <motion.p 
            className="text-noir-platinum mt-8 text-sm uppercase tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Исполнительное совершенство
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen