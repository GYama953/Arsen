import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  delay?: number
}

const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div 
      className="card group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="text-noir-gold mb-6">{icon}</div>
      <h3 className="text-white text-xl font-medium mb-4">{title}</h3>
      <p className="text-noir-platinum mb-6">{description}</p>
      <a 
        href="#" 
        className="inline-flex items-center text-noir-gold hover:text-white transition-colors"
      >
        <span className="mr-2">Узнать больше</span>
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <FiArrowRight />
        </motion.span>
      </a>
    </motion.div>
  )
}

export default ServiceCard