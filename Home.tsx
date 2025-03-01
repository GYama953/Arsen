import { FiTarget, FiTrendingUp, FiShield, FiGlobe } from 'react-icons/fi'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <>
      <Hero 
        title="Исполнительные решения для современных бизнес-лидеров"
        subtitle="Поднимите свой бизнес на новый уровень с нашими премиальными консалтинговыми услугами, разработанными для современного руководителя. Стратегические идеи, индивидуальные решения, исключительные результаты."
        buttonText="Узнать о нашей базе"
        buttonLink="/services"
      />
      
      {/* About Section */}
      <section className="py-24 bg-noir-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-noir-gold/0 via-noir-gold/20 to-noir-gold/0"></div>
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                Переосмысление исполнительного <span className="text-noir-gold">совершенства</span>
              </h2>
              <p className="section-subtitle">
                С 2010 года мы находимся на переднем крае бизнес-инноваций, помогая лидерам отрасли ориентироваться в сложностях и достигать устойчивого роста.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-white text-4xl font-display mb-2">15+</p>
                  <p className="text-noir-platinum">Лет совершенства</p>
                </div>
                <div>
                  <p className="text-white text-4xl font-display mb-2">500+</p>
                  <p className="text-noir-platinum">Глобальных клиентов</p>
                </div>
                <div>
                  <p className="text-white text-4xl font-display mb-2">98%</p>
                  <p className="text-noir-platinum">Удержание клиентов</p>
                </div>
                <div>
                  <p className="text-white text-4xl font-display mb-2">2 млрд+</p>
                  <p className="text-noir-platinum">Сгенерированный доход</p>
                </div>
              </div>
              
              <motion.a 
                href="/about" 
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                О нашей компании
              </motion.a>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10 rounded-sm overflow-hidden shadow-premium">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1951&q=80" 
                  alt="Встреча руководителей" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-background/80 to-transparent"></div>
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-noir-gold/20 rounded-sm z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24 bg-noir-container relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Наши премиальные <span className="text-noir-gold">услуги</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Комплексные решения, адаптированные для решения сложных задач современного бизнес-руководства.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="Стратегическое планирование"
              description="Разработка комплексных бизнес-стратегий, согласованных с вашим видением и рыночными возможностями."
              icon={<FiTarget size={32} />}
              delay={0.1}
            />
            <ServiceCard 
              title="Ускорение роста"
              description="Выявление и использование возможностей для масштабирования вашего бизнеса и увеличения доли рынка."
              icon={<FiTrendingUp size={32} />}
              delay={0.2}
            />
            <ServiceCard 
              title="Управление рисками"
              description="Защитите свой бизнес с помощью сложных стратегий оценки и снижения рисков."
              icon={<FiShield size={32} />}
              delay={0.3}
            />
            <ServiceCard 
              title="Глобальное расширение"
              description="Навигация по международным рынкам с экспертным руководством по трансграничным операциям."
              icon={<FiGlobe size={32} />}
              delay={0.4}
            />
          </div>
          
          <div className="text-center mt-12">
            <motion.a 
              href="/services" 
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Посмотреть нашу базу
            </motion.a>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-noir-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Отзывы <span className="text-noir-gold">клиентов</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Послушайте руководителей и бизнес-лидеров, которые трансформировали свои организации с нашей помощью.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Стратегическое руководство Apex сыграло решающую роль в нашем успешном расширении рынка. Их руководящая команда обладает непревзойденным опытом и проницательностью."
              author="Александра Чен"
              position="Генеральный директор"
              company="Nexus Technologies"
              delay={0.1}
            />
            <TestimonialCard 
              quote="Работа с Apex трансформировала наш подход к управлению рисками. Их индивидуальные решения принесли измеримые результаты уже в первом квартале."
              author="Марк Джонсон"
              position="Финансовый директор"
              company="Meridian Global"
              delay={0.2}
            />
            <TestimonialCard 
              quote="Уровень профессионализма и экспертизы в Apex исключителен. Их команда помогла нам уверенно преодолеть сложные нормативные проблемы."
              author="София Уильямс"
              position="Операционный директор"
              company="Elysium Ventures"
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-noir-background relative">
        <div className="absolute inset-0 bg-gradient-to-r from-noir-background to-noir-container/50 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">
              Готовы поднять свой <span className="text-noir-gold">бизнес</span>?
            </h2>
            <p className="section-subtitle mx-auto">
              Запланируйте консультацию с нашей исполнительной командой, чтобы обсудить ваши бизнес-задачи и возможности.
            </p>
            <motion.a 
              href="/contact" 
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

export default Home