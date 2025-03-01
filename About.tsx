import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { FiSearch, FiPlay, FiPause, FiVolume2, FiVolumeX, FiFilter, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';

const About: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [filteredVideos, setFilteredVideos] = useState<any[]>([]);
  const [activeVideo, setActiveVideo] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [podcastData, setPodcastData] = useState<any[]>([]);

  // Загрузка данных из JSON
  useEffect(() => {
    fetch('/data/podcastData.json')
      .then((response) => {
        if (!response.ok) throw new Error('Файл не найден');
        return response.json();
      })
      .then((data) => {
        setPodcastData(data);
        // Преобразование данных для совместимости
        const initialVideos = data.map((item) => ({
          id: item.video_id,
          title: item.title,
          description: item.transcript.map((seg: any) => seg.text).join(' '),
          category: 'Эфиры', // Можно настроить категории позже
          tags: item.transcript.map((seg: any) => seg.text.split(' ')[0]), // Простые теги
          url: item.url || 'https://via.placeholder.com/150', // URL видео или заглушка
          transcriptSegments: item.transcript // Сохраняем оригинальные сегменты
        }));
        setFilteredVideos(initialVideos);
        setActiveVideo(initialVideos[0]);
      })
      .catch((error) => console.error('Ошибка загрузки данных:', error));
  }, []);

  // Фильтрация видео с поиском по транскриптам
  useEffect(() => {
    const results = podcastData.map((item) => {
      const segmentsMatch = item.transcript.some((seg: any) =>
        seg.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const titleMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      return {
        id: item.video_id,
        title: item.title,
        description: item.transcript.map((seg: any) => seg.text).join(' '),
        category: 'Эфиры',
        tags: item.transcript.map((seg: any) => seg.text.split(' ')[0]),
        url: item.url || 'https://via.placeholder.com/150',
        transcriptSegments: item.transcript
      };
    }).filter((video) => {
      const matchesSearch = 
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.transcriptSegments.some((seg: any) => seg.text.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'Все' || video.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredVideos(results);
    if (results.length > 0 && !results.some(v => v.id === activeVideo?.id)) {
      setActiveVideo(results[0]);
    }
  }, [searchTerm, selectedCategory, podcastData]);

  // Логика плеера (без изменений)
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const updateProgress = () => {
    if (videoRef.current) {
      const value = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(value);
    }
  };

  const setVideoProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
      videoRef.current.currentTime = clickPosition * videoRef.current.duration;
    }
  };

  const selectVideo = (video: any) => {
    setActiveVideo(video);
    setIsPlaying(false);
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setScrollPosition(Math.max(0, scrollPosition - scrollAmount));
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
      setScrollPosition(Math.min(maxScroll, scrollPosition + scrollAmount));
    }
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = scrollContainerRef.current ? 
    scrollPosition < (scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth) : true;

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Функция для получения тайминга из транскрипта
  const getTimestampLink = (video: any, searchTerm: string) => {
    const matchingSegment = video.transcriptSegments.find((seg: any) =>
      seg.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (matchingSegment) {
      const startSeconds = convertToSeconds(matchingSegment.start);
      return `${video.url}&t=${startSeconds}s`; // Формат YouTube с таймкодом
    }
    return video.url;
  };

  // Преобразование таймкода в секунды
  const convertToSeconds = (timecode: string) => {
    const [hours, minutes, seconds] = timecode.split(':');
    const [secs, ms] = seconds.split(',');
    return (+hours * 3600) + (+minutes * 60) + (+secs) + (+ms / 1000);
  };

  return (
    <>
      <Hero 
        title="Секретные файлы Базы"
        subtitle="Найди необходимые видеоматериалы из Базы с помощью расширенной системы поиска."
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80"
      />
      
      <section className="py-24 bg-noir-background">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="section-title mb-4 md:mb-0">
                Картотека <span className="text-noir-gold">Базы</span>
              </h2>
              
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Поиск по ключевым словам..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-noir-container border border-white/10 rounded-sm pl-10 pr-4 py-3 text-noir-text focus:border-noir-gold/50 focus:outline-none focus:ring-1 focus:ring-noir-gold/30 transition-colors"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-noir-platinum" size={18} />
              </div>
            </div>
            
            <div className="relative flex items-center mb-8">
              <button 
                onClick={scrollLeft}
                className={`absolute left-0 z-10 bg-noir-background/80 backdrop-blur-sm p-2 rounded-full shadow-premium border border-white/10 text-noir-platinum hover:text-white transition-colors ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!canScrollLeft}
              >
                <FiChevronLeft size={20} />
              </button>
              
              <div 
                ref={scrollContainerRef}
                className="flex gap-2 overflow-x-auto py-2 px-10 scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {['Все', 'Эфиры', 'Здоровье, исследования', 'Мысли', 'Биохакинг, Гормоны', 'Питание', 'Психика', 'Спорт', 'МЖ, Семья', 'Биомеханика', 'ИРЛ', 'Книги'].map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-sm text-sm transition-colors whitespace-nowrap flex-shrink-0 ${
                      selectedCategory === category 
                        ? 'bg-noir-gold text-noir-background' 
                        : 'bg-noir-container text-noir-platinum hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <button 
                onClick={scrollRight}
                className={`absolute right-0 z-10 bg-noir-background/80 backdrop-blur-sm p-2 rounded-full shadow-premium border border-white/10 text-noir-platinum hover:text-white transition-colors ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!canScrollRight}
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                        activeVideo?.id === video.id 
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
                      setSearchTerm('');
                      setSelectedCategory('Все');
                    }}
                    className="text-noir-gold hover:text-white transition-colors"
                  >
                    Сбросить фильтры
                  </button>
                </div>
              )}
            </motion.div>
            
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-noir-container p-6 rounded-sm shadow-premium border border-white/5 mb-8">
                <div className="relative aspect-video overflow-hidden rounded-sm mb-4">
                  {!isPlaying && (
                    <div className="absolute inset-0 z-10">
                      <img 
                        src={activeVideo?.thumbnail} 
                        alt={activeVideo?.title}
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
                  <video
                    ref={videoRef}
                    src={activeVideo?.url}
                    className="w-full h-full object-cover"
                    onTimeUpdate={updateProgress}
                    onEnded={() => setIsPlaying(false)}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <div 
                    className="h-1 bg-noir-background rounded-full overflow-hidden cursor-pointer"
                    onClick={setVideoProgress}
                  >
                    <div 
                      className="h-full bg-noir-gold"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
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
                <div className="mt-6">
                  <h3 className="text-white text-xl font-medium mb-2">
                    {activeVideo?.title}
                  </h3>
                  <p className="text-noir-platinum mb-4">
                    {activeVideo?.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeVideo?.tags.map((tag: string, index: number) => (
                      <span 
                        key={index}
                        className="bg-noir-background px-3 py-1 rounded-sm text-xs text-noir-platinum"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  {activeVideo?.transcriptSegments && (
                    <div className="mt-2">
                      <h4 className="text-sm font-semibold text-noir-gold">Найденные тайминги:</h4>
                      {activeVideo.transcriptSegments
                        .filter((seg: any) => seg.text.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((seg: any, index: number) => (
                          <p key={index} className="text-sm">
                            {seg.text} (<a href={`${activeVideo.url}&t=${convertToSeconds(seg.start)}s`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">с {seg.start}</a>)
                          </p>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-noir-background relative">
        <div className="absolute inset-0 bg-gradient-to-r from-noir-background to-noir-container/50 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">
              Не нашли то, что <span className="text-noir-gold">искали</span>?
            </h2>
            <p className="section-subtitle mx-auto">
              Свяжитесь с нашей командой, чтобы запросить специализированные материалы или получить персональную консультацию.
            </p>
            <motion.a 
              href="/contact" 
              className="btn-primary mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Связаться с нами
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

// Преобразование таймкода в секунды
const convertToSeconds = (timecode: string) => {
  const [hours, minutes, seconds] = timecode.split(':');
  const [secs, ms] = seconds.split(',');
  return (+hours * 3600) + (+minutes * 60) + (+secs) + (+ms / 1000);
};

export default About;