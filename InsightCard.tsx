import { motion } from 'framer-motion'
import { FiClock } from 'react-icons/fi'

interface InsightCardProps {
  title: string
  excerpt: string
  category: string
  date: string
  imageUrl: string
  delay?: number
}

const InsightCard = ({ title, excerpt, category, date, imageUrl, delay = 0 }: InsightCardProps) => {
  return (
    <motion.article 
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="overflow-hidden rounded-sm mb-4 relative">
        <div className="absolute inset-0 bg-noir-gold/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        <motion.img 
          src={imageUrl} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-700"
          whileHover={{ scale: 1.05 }}
        />
      </div>
      
      <div className="flex items-center space-x-4 mb-3">
        <span className="text-noir-gold text-sm uppercase tracking-wider">{category}</span>
        <span className="text-noir-platinum text-sm flex items-center">
          <FiClock className="mr-1" size={14} />
          {date}
        </span>
      </div>
      
      <h3 className="text-white text-xl font-medium mb-2 group-hover:text-noir-gold transition-colors">
        {title}
      </h3>
      
      <p className="text-noir-platinum mb-4">{excerpt}</p>
      
      <a 
        href="#" 
        className="text-noir-gold hover:text-white transition-colors inline-block border-b border-noir-gold/30 pb-1"
      >
        Читать статью
      </a>
    </motion.article>
  )
}

export default InsightCard