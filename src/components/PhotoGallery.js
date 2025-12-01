import { useState, useEffect } from 'react';

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Create more sparkles
    const sparkleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setSparkles(sparkleArray);
  }, []);

  // Your actual photos
  const photos = [
    {
      id: 1,
      image: '/photos/birth picture.jpeg',
      caption: 'When you were born 👶',
    },
    {
      id: 2,
      image: '/photos/1 year.jpeg',
      caption: 'Your first year 🎂',
    },
    {
      id: 3,
      image: '/photos/school.jpeg',
      caption: 'School days 📚',
    },
    {
      id: 4,
      image: '/photos/2024.jpeg',
      caption: 'Growing up so fast! 🌟',
    },
    {
      id: 5,
      image: '/photos/WhatsApp Image 2025-12-01 at 7.03.42 PM.jpeg',
      caption: 'My cutest sister 💖',
    },
    {
      id: 6,
      image: '/photos/WhatsApp Image 2025-12-01 at 7.04.04 PM.jpeg',
      caption: 'My sunshine ☀️',
    },
    {
      id: 7,
      image: '/photos/WhatsApp Image 2025-12-01 at 7.05.40 PM.jpeg',
      caption: 'Always smiling 😄',
    },
    {
      id: 8,
      image: '/photos/WhatsApp Image 2025-12-01 at 7.05.41 PM.jpeg',
      caption: 'Beautiful Princess 👸',
    },
    {
      id: 9,
      image: '/photos/WhatsApp Image 2025-12-01 at 7.06.38 PM.jpeg',
      caption: 'Little Star ⭐',
    },
    {
      id: 10,
      image: '/photos/precious moments.jpg',
      caption: 'Precious moments 💕',
    },
    {
      id: 11,
      image: '/photos/parents.jpeg',
      caption: 'With parents 👨‍👩‍👧',
    },
    {
      id: 12,
      image: '/photos/mumma.jpeg',
      caption: 'With Mumma 💖',
    },
    {
      id: 13,
      image: '/photos/funny.jpeg',
      caption: 'Funny moments 😂',
    },
    {
      id: 14,
      image: '/photos/Jiju.jpeg',
      caption: 'Special moment with Jiju 💝',
    },
    {
      id: 15,
      image: '/photos/WhatsApp Image 2025-12-01 at 9.06.00 PM.jpeg',
      caption: 'With me - my precious sister 💕',
    },
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex]);

  const nextPhoto = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
      setIsTransitioning(false);
    }, 400);
  };

  const prevPhoto = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
      setIsTransitioning(false);
    }, 400);
  };

  const goToPhoto = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-indigo-50/50 py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {sparkles.map((sparkle) => (
          <span
            key={sparkle.id}
            className="absolute text-lg animate-sparkle opacity-30"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              animationDelay: `${sparkle.delay}s`,
            }}
          >
            ✨
          </span>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-3 md:mb-4">
            <span className="text-4xl md:text-5xl animate-float inline-block">📸</span>
            <span className="text-4xl md:text-5xl animate-float inline-block mx-2 md:mx-3" style={{ animationDelay: '0.2s' }}>✨</span>
            <span className="text-4xl md:text-5xl animate-float inline-block" style={{ animationDelay: '0.4s' }}>📷</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 mb-2 md:mb-3 tracking-wide">
            Photo Gallery
          </h2>
          <div className="w-24 md:w-32 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-pink-300 via-purple-300 to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Smaller, More Responsive Photo Display */}
          <div className="flex justify-center items-center mb-6 md:mb-10">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg group">
              {/* Multiple glow layers */}
              <div className="absolute -inset-2 md:-inset-3 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-xl md:blur-2xl"></div>
              <div className="absolute -inset-1 md:-inset-1 bg-gradient-to-r from-pink-200 to-purple-200 rounded-lg md:rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg"></div>
              
              <div className="relative overflow-hidden rounded-lg md:rounded-xl shadow-xl md:shadow-2xl bg-white p-2 md:p-3 transform group-hover:scale-[1.02] transition-all duration-500">
                <img
                  src={photos[currentIndex].image.replace(/ /g, '%20').replace(/\(/g, '%28').replace(/\)/g, '%29')}
                  alt={photos[currentIndex].caption}
                  className={`w-full h-auto object-cover rounded-md md:rounded-lg transition-all duration-500 ${
                    isTransitioning ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
                  }`}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x600/F3F4F6/9CA3AF?text=Photo+Not+Found';
                  }}
                />
                
                {/* Enhanced Sparkles on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {sparkles.map((sparkle) => (
                    <span
                      key={sparkle.id}
                      className="absolute text-xl md:text-2xl animate-sparkle"
                      style={{
                        left: `${sparkle.left}%`,
                        top: `${sparkle.top}%`,
                        animationDelay: `${sparkle.delay}s`,
                      }}
                    >
                      ✨
                    </span>
                  ))}
                </div>

                {/* Corner decorations */}
                <div className="absolute top-2 left-2 md:top-4 md:left-4 text-xl md:text-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-star-shine">⭐</div>
                <div className="absolute top-2 right-2 md:top-4 md:right-4 text-xl md:text-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-star-shine" style={{ animationDelay: '0.3s' }}>⭐</div>
              </div>
            </div>
          </div>

          {/* Enhanced Caption */}
          <div className="text-center mb-6 md:mb-10 animate-slide-in-up">
            <div className="inline-block px-6 py-3 md:px-10 md:py-5 bg-white/80 backdrop-blur-lg rounded-full shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <p className="text-lg sm:text-xl md:text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 flex items-center gap-2 md:gap-3 justify-center">
                <span>{photos[currentIndex].caption}</span>
              </p>
            </div>
          </div>

          {/* Enhanced Navigation */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Previous Button - Enhanced */}
            <button
              onClick={prevPhoto}
              disabled={isTransitioning}
              className="group w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gray-200 text-gray-600 hover:border-pink-400 hover:text-pink-500 hover:bg-white hover:scale-110 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center shadow-md hover:shadow-xl"
              aria-label="Previous photo"
            >
              <svg className="w-5 h-5 md:w-6 md:h-7 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Enhanced Dots Indicator */}
            <div className="flex gap-2 md:gap-2.5">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPhoto(index)}
                  disabled={isTransitioning}
                  className={`transition-all duration-500 rounded-full ${
                    index === currentIndex
                      ? 'w-8 md:w-10 h-2 md:h-2.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg animate-pulse-glow'
                      : 'w-2 md:w-2.5 h-2 md:h-2.5 bg-gray-300 hover:bg-gray-400 hover:scale-125'
                  }`}
                  aria-label={`Go to photo ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button - Enhanced */}
            <button
              onClick={nextPhoto}
              disabled={isTransitioning}
              className="group w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gray-200 text-gray-600 hover:border-pink-400 hover:text-pink-500 hover:bg-white hover:scale-110 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center shadow-md hover:shadow-xl"
              aria-label="Next photo"
            >
              <svg className="w-5 h-5 md:w-6 md:h-7 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Enhanced Photo Counter */}
          <div className="text-center">
            <div className="inline-block px-4 py-2 md:px-5 md:py-2 bg-white/60 backdrop-blur-sm rounded-full">
              <p className="text-xs md:text-sm text-gray-600 font-light">
                <span className="text-pink-600 font-medium">{currentIndex + 1}</span>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-purple-600 font-medium">{photos.length}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
