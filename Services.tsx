import Hero from '../components/Hero'
import { motion } from 'framer-motion'
import { FiTarget, FiTrendingUp, FiShield, FiGlobe, FiUsers, FiDatabase, FiLayers, FiRefreshCw, FiPlay, FiPause, FiVolume2, FiVolumeX, FiFilter } from 'react-icons/fi'
import { useState, useRef, useEffect } from 'react'

// Sample video data
const videoData = [
  {
    id: 'tr15',
    title: "TR15 - Стратегическое планирование",
    description: "Комплексный обзор методологии TR15 для стратегического планирования бизнеса.",
    category: "TR15",
    tags: ["стратегия", "планирование", "бизнес"],
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 'tr21',
    title: "TR21 - Управление рисками",
    description: "Детальный анализ системы TR21 для эффективного управления бизнес-рисками.",
    category: "TR21",
    tags: ["риски", "управление", "анализ"],
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1915&q=80"
  },
  {
    id: 'lifestyle',
    title: "Жить в кайф - Баланс работы и жизни",
    description: "Стратегии для руководителей по достижению оптимального баланса между профессиональным успехом и личным благополучием.",
    category: "Жить в кайф",
    tags: ["баланс", "благополучие", "лидерство"],
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80"
  },
  {
    id: 'tr15-advanced',
    title: "TR15 - Продвинутые техники планирования",
    description: "Углубленное изучение продвинутых методик стратегического планирования для опытных руководителей.",
    category: "TR15",
    tags: ["стратегия", "планирование", "продвинутый"],
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 'tr21-case-studies',
    title: "TR21 - Примеры из практики",
    description: "Реальные примеры применения методологии TR21 в различных отраслях бизнеса.",
    category: "TR21",
    tags: ["кейсы", "практика", "примеры"],
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 'lifestyle-productivity',
    title: "Жить в кайф - Повышение продуктивности",
    description: "Методики и инструменты для максимизации личной и профессиональной продуктивности без выгорания.",
    category: "Жить в кайф",
    tags: ["продуктивность", "эффективность", "тайм-менеджмент"],
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80"
  },
  {
    id: 'tr15-implementation',
    title: "TR15 - Внедрение стратегии",
    description: "Пошаговое руководство по эффективному внедрению стратегических планов в организации.",
    category: "TR15",
    tags: ["внедрение", "реализация", "управление изменениями"],
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 'lifestyle-mindfulness',
    title: "Жить в кайф - Практики осознанности",
    description: "Техники осознанности и медитации для улучшения концентрации и снижения стресса руководителей.",
    category: "Жить в кайф",
    tags: ["осознанность", "медитация", "стресс"],
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80"
  }
];

// Available categories for filtering
const categories = ["Все", "TR15", "TR21", "Жить в кайф"];

const Services = () => {
  const [activeVideo, setActiveVideo] = useState(videoData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [filteredVideos, setFilteredVideos] = useState(videoData);
  
  // Filter videos based on search term and category
  useEffect(() => {
    const results = videoData.filter(video => {
      const matchesSearch = 
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "Все" || video.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredVideos(results);
    
    // If no current video matches the filter, select the first one from results
    if (results.length > 0 && !results.some(v => v.id === activeVideo.id)) {
      setActiveVideo(results[0]);
    }
  }, [searchTerm, selectedCategory, activeVideo.id]);
  
  // Handle video play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  // Handle video mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  // Update progress bar
  const updateProgress = () => {
    if (videoRef.current) {
      const value = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(value);
    }
  };
  
  // Set video progress on click
  const setVideoProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
      videoRef.current.currentTime = clickPosition * videoRef.current.duration;
    }
  };
  
  // Select a video to play
  const selectVideo = (video: typeof videoData[0]) => {
    setActiveVideo(video);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };
  
  return (
    <>
      <Hero 
        title="База знаний"
        subtitle="Решение для многих вопросов жизни"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
      />
      
      {/* Video Search Interface */}
      <section className="py-24 bg-noir-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Архив <span className="text-noir-gold">материалы</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Исследуйте нашу коллекцию видеоматериалов по бизнес-стратегиям и исполнительному руководству.
            </p>
          </div>
          
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="section-title mb-4 md:mb-0">
                Видеотека <span className="text-noir-gold">Базы</span>
              </h2>
              
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Поиск по ключевым словам..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-noir-container border border-white/10 rounded-sm pl-10 pr-4 py-3 text-noir-text focus:border-noir-gold/50 focus:outline-none focus:ring-1 focus:ring-noir-gold/30 transition-colors"
                />
                <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-noir-platinum" size={18} />
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
                      : 'bg-noir-container text-noir-platinum hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left sidebar - Video list */}
            <motion.div 
              className="lg:col-span-1 h-[600px] overflow-y-auto pr-2 custom-scrollbar"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {filteredVideos.length > 0 ? (
                <div className="space-y-4">
                  {filteredVideos.map((video) => (
                    <motion.div
                      key={video.id}
                      onClick={() => selectVideo(video)}
                      className={`bg-noir-container p-4 rounded-sm cursor-pointer border ${
                        activeVideo.id === video.id 
                          ? 'border-noir-gold/50 shadow-glow' 
                          : 'border-white/5 hover:border-white/20'
                      } transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex">
                        <div className="w-24 h-16 overflow-hidden rounded-sm mr-4 flex-shrink-0">
                          <img 
                            src={video.thumbnail} 
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-white text-sm font-medium mb-1 line-clamp-2">{video.title}</h3>
                          <span className="text-noir-gold text-xs">{video.category}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-noir-container p-6 rounded-sm text-center">
                  <p className="text-noir-platinum mb-4">По вашему запросу ничего не найдено.</p>
                  <button 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("Все");
                    }}
                    className="text-noir-gold hover:text-white transition-colors"
                  >
                    Сбросить фильтры
                  </button>
                </div>
              )}
            </motion.div>
            
            {/* Right content - Video player */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Video player */}
              <div className="bg-noir-container p-6 rounded-sm shadow-premium border border-white/5">
                <div className="relative aspect-video overflow-hidden rounded-sm mb-4">
                  {/* Video thumbnail overlay (shown when video is not playing) */}
                  {!isPlaying && (
                    <div className="absolute inset-0 z-10">
                      <img 
                        src={activeVideo.thumbnail} 
                        alt={activeVideo.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-noir-background/60 flex items-center justify-center">
                        <motion.button
                          onClick={togglePlay}
                          className="w-16 h-16 rounded-full bg-noir-gold/90 flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiPlay size={24} className="text-noir-background ml-1" />
                        </motion.button>
                      </div>
                    </div>
                  )}
                  
                  {/* Actual video element */}
                  <video
                    ref={videoRef}
                    src={activeVideo.url}
                    className="w-full h-full object-cover"
                    onTimeUpdate={updateProgress}
                    onEnded={() => setIsPlaying(false)}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                </div>
                
                {/* Video controls */}
                <div className="flex flex-col space-y-4">
                  {/* Progress bar */}
                  <div 
                    className="h-1 bg-noir-background rounded-full overflow-hidden cursor-pointer"
                    onClick={setVideoProgress}
                  >
                    <div 
                      className="h-full bg-noir-gold"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  
                  {/* Control buttons */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <button 
                        onClick={togglePlay}
                        className="text-noir-platinum hover:text-white transition-colors"
                      >
                        {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
                      </button>
                      <button 
                        onClick={toggleMute}
                        className="text-noir-platinum hover:text-white transition-colors"
                      >
                        {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
                      </button>
                    </div>
                    
                    <div className="text-noir-platinum text-sm">
                      {videoRef.current ? 
                        `${Math.floor(videoRef.current.currentTime / 60)}:${Math.floor(videoRef.current.currentTime % 60).toString().padStart(2, '0')} / 
                         ${Math.floor(videoRef.current.duration / 60) || 0}:${Math.floor(videoRef.current.duration % 60).toString().padStart(2, '0') || '00'}`
                        : '0:00 / 0:00'
                      }
                    </div>
                  </div>
                </div>
                
                {/* Video info */}
                <div className="mt-6">
                  <h3 className="text-white text-xl font-medium mb-2">
                    {activeVideo.title}
                  </h3>
                  <p className="text-noir-platinum mb-4">
                    {activeVideo.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeVideo.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-noir-background px-3 py-1 rounded-sm text-xs text-noir-platinum"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services