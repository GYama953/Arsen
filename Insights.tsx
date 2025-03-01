import Hero from '../components/Hero'
import { motion } from 'framer-motion'
import { FiSearch, FiClock, FiUser } from 'react-icons/fi'
import { useState } from 'react'

// Sample insights data
const insightsData = [
  {
    id: 1,
    title: "Будущее исполнительного руководства в цифровую эпоху",
    excerpt: "Исследование того, как технологии меняют роль руководителей высшего звена и навыки, необходимые для процветания в условиях все более цифрового бизнес-ландшафта.",
    category: "Лидерство",
    author: "Иван Соколов",
    date: "15 мая 2025",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Стратегическое управление рисками для глобальных предприятий",
    excerpt: "Комплексная структура для выявления, оценки и снижения рисков в международных операциях и трансграничных бизнес-предприятиях.",
    category: "Стратегия",
    author: "Виктория Чен",
    date: "28 апреля 2025",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1915&q=80"
  },
  {
    id: 3,
    title: "Устойчивый рост: баланс прибыли и цели",
    excerpt: "Как ведущие компании интегрируют устойчивость в свои основные бизнес-стратегии для создания долгосрочной ценности.",
    category: "Рост",
    author: "Михаил Чернов",
    date: "10 апреля 2025",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 4,
    title: "Искусство стратегических переговоров в бизнесе",
    excerpt: "Ключевые принципы и тактики для успешных переговоров в бизнес-среде с высокими ставками, от слияний до партнерств.",
    category: "Лидерство",
    author: "София Мартинез",
    date: "22 марта 2025",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 5,
    title: "Цифровая трансформация: за пределами технологий",
    excerpt: "Почему успешная цифровая трансформация требует целостного подхода, который затрагивает культуру, процессы и людей наряду с технологиями.",
    category: "Технологии",
    author: "Давид Ким",
    date: "5 марта 2025",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80"
  },
  {
    id: 6,
    title: "Финансовые стратегии для нестабильных рынков",
    excerpt: "Навигация по экономической нестабильности с помощью надежного финансового планирования и стратегического распределения капитала для обеспечения устойчивости бизнеса.",
    category: "Финансы",
    author: "Елизавета Тейлор",
    date: "18 февраля 2025",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 7,
    title: "Создание высокоэффективных руководящих команд",
    excerpt: "Стратегии для формирования, развития и руководства исполнительными командами, которые стимулируют организационное совершенство и инновации.",
    category: "Лидерство",
    author: "Иван Соколов",
    date: "30 января 2025",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 8,
    title: "Выход на глобальный рынок: стратегии успеха",
    excerpt: "Стратегическая структура для оценки и выхода на новые международные рынки при снижении рисков и максимизации возможностей.",
    category: "Стратегия",
    author: "Виктория Чен",
    date: "12 января 2025",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 9,
    title: "Эволюция корпоративного управления",
    excerpt: "Как структуры управления адаптируются для решения возникающих проблем в области этики, устойчивости и ожиданий заинтересованных сторон.",
    category: "Управление",
    author: "Михаил Чернов",
    date: "28 декабря 2024",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80"
  }
];

// Categories for filtering
const categories = ["Все", "Лидерство", "Стратегия", "Рост", "Технологии", "Финансы", "Управление"];

const Insights = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");
  
  // Filter insights based on search term and category
  const filteredInsights = insightsData.filter(insight => {
    const matchesSearch = insight.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          insight.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Все" || insight.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Get featured insight
  const featuredInsight = insightsData.find(insight => insight.featured);
  
  return (
    <>
      <Hero 
        title="Аналитика и перспективы"
        subtitle="Экспертный анализ, лидерство мысли и стратегические перспективы развивающегося бизнес-ландшафта."
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80"
      />
      
      {/* Featured Insight */}
      {featuredInsight && (
        <section className="py-24 bg-noir-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="section-title">
                Избранная <span className="text-noir-gold">аналитика</span>
              </h2>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-sm shadow-premium">
                <img 
                  src={featuredInsight.imageUrl} 
                  alt={featuredInsight.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-noir-gold text-sm uppercase tracking-wider">{featuredInsight.category}</span>
                  <span className="text-noir-platinum text-sm flex items-center">
                    <FiClock className="mr-1" size={14} />
                    {featuredInsight.date}
                  </span>
                </div>
                
                <h3 className="text-white text-3xl font-medium mb-4">{featuredInsight.title}</h3>
                
                <p className="text-noir-platinum mb-6">{featuredInsight.excerpt}</p>
                
                <div className="flex items-center mb-8">
                  <FiUser className="text-noir-gold mr-2" />
                  <span className="text-noir-platinum">Автор: {featuredInsight.author}</span>
                </div>
                
                <motion.a 
                  href="#" 
                  className="btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Читать полную статью
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Insights Listing */}
      <section className="py-24 bg-noir-container">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="section-title mb-4 md:mb-0">
                Последние <span className="text-noir-gold">аналитические материалы</span>
              </h2>
              
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Поиск аналитики..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-noir-background border border-white/10 rounded-sm pl-10 pr-4 py-2 text-noir-text focus:border-noir-gold/50 focus:outline-none focus:ring-1 focus:ring-noir-gold/30 transition-colors"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-noir-platinum" />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-sm text-sm transition-colors ${
                    selectedCategory === category 
                      ? 'bg-noir-gold text-noir-background' 
                      : 'bg-noir-background text-noir-platinum hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {filteredInsights.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInsights.map((insight, index) => (
                <motion.article 
                  key={insight.id}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="overflow-hidden rounded-sm mb-4 relative">
                    <div className="absolute inset-0 bg-noir-gold/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                    <motion.img 
                      src={insight.imageUrl} 
                      alt={insight.title}
                      className="w-full h-64 object-cover transition-transform duration-700"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-noir-gold text-sm uppercase tracking-wider">{insight.category}</span>
                    <span className="text-noir-platinum text-sm flex items-center">
                      <FiClock className="mr-1" size={14} />
                      {insight.date}
                    </span>
                  </div>
                  
                  <h3 className="text-white text-xl font-medium mb-2 group-hover:text-noir-gold transition-colors">
                    {insight.title}
                  </h3>
                  
                  <p className="text-noir-platinum mb-4">{insight.excerpt}</p>
                  
                  <a 
                    href="#" 
                    className="text-noir-gold hover:text-white transition-colors inline-block border-b border-noir-gold/30 pb-1"
                  >
                    Читать статью
                  </a>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-noir-platinum text-lg">Не найдено аналитических материалов, соответствующих вашим критериям.</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Все");
                }}
                className="mt-4 btn-secondary"
              >
                Сбросить фильтры
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-24 bg-noir-background relative">
        <div className="absolute inset-0 bg-gradient-to-r from-noir-background to-noir-container/50 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">
              Подпишитесь на нашу <span className="text-noir-gold">рассылку</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Будьте в курсе наших последних аналитических материалов, отраслевых тенденций и эксклюзивного контента, доставляемого прямо на вашу электронную почту.
            </p>
            
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Ваш адрес электронной почты"
                className="flex-grow bg-noir-container border border-white/10 rounded-sm px-4 py-3 text-noir-text focus:border-noir-gold/50 focus:outline-none focus:ring-1 focus:ring-noir-gold/30 transition-colors"
              />
              <motion.button 
                className="btn-primary whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Подписаться
              </motion.button>
            </div>
            
            <p className="text-noir-platinum text-sm mt-4">
              Подписываясь, вы соглашаетесь получать нашу рассылку и принимаете нашу политику конфиденциальности.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Insights