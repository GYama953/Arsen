import { Link } from 'react-router-dom'
import { FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-noir-container border-t border-white/5">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-white font-display text-2xl tracking-tight">APEX</span>
              <span className="text-noir-gold ml-1 font-display text-2xl">.</span>
            </Link>
            <p className="text-noir-platinum text-sm mb-6">
              Премиальные бизнес-решения для современного руководителя.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-noir-platinum hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-noir-platinum hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-noir-platinum hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Компания</h4>
            <ul className="space-y-2">
              <li><Link to="/search" className="text-noir-platinum hover:text-white transition-colors text-sm">Поиск</Link></li>
              <li><Link to="/services" className="text-noir-platinum hover:text-white transition-colors text-sm">База</Link></li>
              <li><Link to="/contact" className="text-noir-platinum hover:text-white transition-colors text-sm">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Правовая информация</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-noir-platinum hover:text-white transition-colors text-sm">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-noir-platinum hover:text-white transition-colors text-sm">Условия использования</a></li>
              <li><a href="#" className="text-noir-platinum hover:text-white transition-colors text-sm">Политика использования файлов cookie</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Контакты</h4>
            <address className="not-italic text-noir-platinum text-sm">
              <p>1 Исполнительная Башня</p>
              <p>Финансовый район</p>
              <p>Москва, 123317</p>
              <p className="mt-2">contact@apexexecutive.com</p>
              <p>+7 (495) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-noir-platinum text-sm">
            &copy; {currentYear} Apex Executive. Все права защищены.
          </p>
          <p className="text-noir-platinum text-sm mt-4 md:mt-0">
            Разработано с точностью. Создано с совершенством.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer