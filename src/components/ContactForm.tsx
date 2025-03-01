import { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
    alert('Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }
  
  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-white mb-2 text-sm">Полное имя</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-noir-background border border-white/10 rounded-sm px-4 py-3 text-noir-text focus:border-noir-gold/50 focus:outline-none focus:ring-1 focus:ring-noir-gold/30 transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-white mb-2 text-sm">Электронная почта</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-noir-background border border-white/10 rounded-sm px-4 py-3 text-noir-text focus:border-noir-gold/50 focus:outline-none focus:ring-1 focus:ring-noir-gold/30 transition-colors"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="company" className="block text-white mb-2 text-sm">Компания</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-noir-background border border-white/10 rounded-sm px-4 py-3 text-noir-text focus:border-noir-gold/50 focus:outline-none focus:ring-1 focus:ring-noir-gold/30 transition-colors"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-white mb-2 text-sm">Сообщение</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-noir-background border border-white/10 rounded-sm px-4 py-3 text-noir-text focus:border-noir-gold/50 focus:outline-none focus:ring-1 focus:ring-noir-gold/30 transition-colors resize-none"
        ></textarea>
      </div>
      
      <motion.button
        type="submit"
        className="btn-primary w-full"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Отправить сообщение
      </motion.button>
    </motion.form>
  )
}

export default ContactForm
