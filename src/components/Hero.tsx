import { motion } from 'framer-motion'

interface HeroProps {
  title: string
  subtitle: string
  buttonText?: string
  buttonLink?: string
  backgroundImage?: string
}

const Hero = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink = "#", 
  backgroundImage = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
}: HeroProps) => {
  return (
    <section 
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(28, 28, 30, 0.9), rgba(28, 28, 30, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-noir-background/80 to-noir-background/40"></div>
      
      {/* Gold accent line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-noir-gold/0 via-noir-gold/30 to-noir-gold/0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-4xl md:text-6xl font-medium text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="text-noir-platinum text-lg md:text-xl mb-10 max-w-2xl">
            {subtitle}
          </p>
          
          {buttonText && (
            <motion.a
              href={buttonLink}
              className="btn-primary inline-block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {buttonText}
            </motion.a>
          )}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-noir-gold/0 via-noir-gold/50 to-noir-gold/0"></div>
      </motion.div>
    </section>
  )
}

export default Hero
