import { motion } from 'framer-motion'

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
  company: string
  delay?: number
}

const TestimonialCard = ({ quote, author, position, company, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {/* Quotation mark */}
      <div className="text-noir-gold/20 text-6xl font-serif mb-4">"</div>
      
      <p className="text-noir-text text-lg mb-8 italic">{quote}</p>
      
      <div>
        <p className="text-white font-medium">{author}</p>
        <p className="text-noir-platinum text-sm">{position}, {company}</p>
      </div>
    </motion.div>
  )
}

export default TestimonialCard