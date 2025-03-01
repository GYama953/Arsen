import Hero from '../components/Hero'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'

const Contact = () => {
  return (
    <>
      <Hero 
        title="Свяжитесь с нами"
        subtitle="Наша команда экспертов готова помочь вам с вашими бизнес-задачами. Свяжитесь с нами, чтобы начать разговор."
        backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
      />
      
      {/* Contact Information */}
      <section className="py-24 bg-noir-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                Давайте <span className="text-noir-gold">обсудим</span> ваши бизнес-задачи
              </h2>
              <p className="text-noir-platinum mb-8">
                Независимо от того, ищете ли вы стратегическое руководство, поддержку в росте или помощь в преодолении конкретной бизнес-проблемы, наша команда экспертов готова помочь.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="text-noir-gold mr-4">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-medium mb-2">Наш офис</h3>
                    <p className="text-noir-platinum">
                      1 Исполнительная Башня<br />
                      Финансовый район<br />
                      Москва, 123317
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-noir-gold mr-4">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-medium mb-2">Телефон</h3>
                    <p className="text-noir-platinum">
                      +7 (495) 123-4567<br />
                      +7 (495) 987-6543
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-noir-gold mr-4">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-medium mb-2">Электронная почта</h3>
                    <p className="text-noir-platinum">
                      contact@apexexecutive.com<br />
                      info@apexexecutive.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-noir-gold mr-4">
                    <FiClock size={24} />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-medium mb-2">Часы работы</h3>
                    <p className="text-noir-platinum">
                      Понедельник - Пятница: 9:00 - 18:00<br />
                      Суббота - Воскресенье: Закрыто
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-noir-container p-8 rounded-sm shadow-premium border border-white/5"
            >
              <h3 className="text-white text-2xl font-medium mb-6">Отправьте нам сообщение</h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-24 bg-noir-container relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Наше <span className="text-noir-gold">расположение</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Посетите наш офис в центре Москвы, удобно расположенный в финансовом районе.
            </p>
          </div>
          
          <div className="relative rounded-sm overflow-hidden shadow-premium h-96">
            {/* This would typically be a Google Maps embed, but for this example we'll use a placeholder image */}
            <img 
              src="https://images.unsplash.com/photo-1569959220744-ff553533f492?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" 
              alt="Карта расположения офиса" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir-background/80 to-transparent"></div>
            
            {/* Map pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-noir-gold">
                <FiMapPin size={40} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-noir-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Часто задаваемые <span className="text-noir-gold">вопросы</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Ответы на наиболее распространенные вопросы о наших услугах и процессах.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Как начать работу с Apex?",
                answer: "Процесс начинается с первоначальной консультации, где мы обсуждаем ваши бизнес-задачи и цели. Затем мы разрабатываем индивидуальное предложение, основанное на ваших конкретных потребностях.",
                delay: 0.1
              },
              {
                question: "Сколько времени занимает типичный проект?",
                answer: "Продолжительность проекта варьируется в зависимости от объема и сложности. Стратегические проекты обычно занимают 2-3 месяца, в то время как более комплексные инициативы по трансформации могут длиться 6-12 месяцев.",
                delay: 0.2
              },
              {
                question: "Работаете ли вы с компаниями определенного размера?",
                answer: "Мы работаем с организациями всех размеров, от быстрорастущих стартапов до глобальных корпораций. Наши услуги масштабируются в соответствии с вашими потребностями и бюджетом.",
                delay: 0.3
              },
              {
                question: "Как вы измеряете успех проекта?",
                answer: "Мы определяем четкие, измеримые KPI в начале каждого проекта. Наша команда регулярно отслеживает эти показатели и предоставляет подробные отчеты о прогрессе и ROI.",
                delay: 0.4
              },
              {
                question: "Предоставляете ли вы услуги за пределами России?",
                answer: "Да, мы работаем с клиентами по всему миру. Наша команда имеет опыт работы на международных рынках и может предоставлять услуги как удаленно, так и на месте.",
                delay: 0.5
              },
              {
                question: "Какие отрасли вы обслуживаете?",
                answer: "Мы имеем опыт работы в различных отраслях, включая финансовые услуги, технологии, здравоохранение, производство, розничную торговлю и энергетику, среди прочих.",
                delay: 0.6
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: faq.delay }}
                viewport={{ once: true }}
              >
                <h3 className="text-white text-xl font-medium mb-4">{faq.question}</h3>
                <p className="text-noir-platinum">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-noir-container relative">
        <div className="absolute inset-0 bg-gradient-to-r from-noir-background to-noir-container/50 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">
              Готовы начать свой путь к <span className="text-noir-gold">успеху</span>?
            </h2>
            <p className="section-subtitle mx-auto">
              Свяжитесь с нами сегодня, чтобы узнать, как наша команда экспертов может помочь вам достичь ваших бизнес-целей.
            </p>
            <motion.a 
              href="#" 
              className="btn-primary mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Запланировать консультацию
            </motion.a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact