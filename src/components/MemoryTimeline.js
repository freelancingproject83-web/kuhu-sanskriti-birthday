import { useState, useEffect } from 'react';

const MemoryTimeline = () => {
  const [sparkles, setSparkles] = useState([]);
  const [stars, setStars] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Create more sparkles
    const sparkleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setSparkles(sparkleArray);

    // Create stars
    const starArray = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
    }));
    setStars(starArray);
  }, []);

  const memories = [
    {
      year: 2013,
      title: 'When You Were Born',
      description: 'The day our little princess came into the world',
      emoji: '👶',
      image: '/photos/birth picture.jpeg',
    },
    {
      year: 2014,
      title: 'Your First Year',
      description: 'Your first year of joy and happiness',
      emoji: '🎂',
      image: '/photos/1 year.jpeg',
    },
    {
      year: 2017,
      title: 'Your First School Photo',
      description: 'So proud of my little student',
      emoji: '🎒',
      image: '/photos/school.jpeg',
    },
    {
      year: 2021,
      title: 'Your Funniest Moment',
      description: 'That time you made everyone laugh',
      emoji: '😂',
      image: '/photos/WhatsApp Image 2025-12-01 at 7.05.40 PM.jpeg',
    },
    {
      year: 2023,
      title: 'With Me',
      description: 'A precious moment together - you mean the world to me',
      emoji: '💕',
      image: '/photos/WhatsApp Image 2025-12-01 at 9.06.00 PM.jpeg',
    },
    {
      year: 2024,
      title: 'You Becoming a Smart Girl',
      description: 'Growing up so fast and becoming amazing!',
      emoji: '🧠',
      image: '/photos/2024.jpeg',
    },
    {
      year: 2025,
      title: 'With Your Parents',
      description: 'Beautiful moments with your loving parents',
      emoji: '👨‍👩‍👧',
      image: '/photos/parents.jpeg',
    },
    {
      year: 2025,
      title: 'With Mumma',
      description: 'Special moments with your loving mumma',
      emoji: '👩‍👧',
      image: '/photos/mumma.jpeg',
    },
    {
      year: 2025,
      title: 'Funny Moments',
      description: 'Those hilarious moments that made us all laugh',
      emoji: '😂',
      image: '/photos/funny.jpeg',
    },
    {
      year: 2025,
      title: 'Special Moment with Jiju',
      description: 'Precious memories',
      emoji: '💝',
      image: '/photos/Jiju.jpeg',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-indigo-50/50 py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Sparkles */}
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

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute text-base animate-star-shine opacity-20"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
            }}
          >
            ⭐
          </span>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="text-4xl md:text-5xl animate-float inline-block">⏰</span>
            <span className="text-4xl md:text-5xl animate-float inline-block mx-2 md:mx-3" style={{ animationDelay: '0.2s' }}>💫</span>
            <span className="text-4xl md:text-5xl animate-float inline-block" style={{ animationDelay: '0.4s' }}>⏰</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 mb-3 md:mb-4 tracking-wide">
            Memory Timeline
          </h2>
          <div className="w-24 md:w-32 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-purple-300 via-pink-300 to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Enhanced Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-300 rounded-full shadow-lg"></div>

          {memories.map((memory, index) => (
            <div
              key={memory.year}
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row items-center transition-all duration-1000 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Enhanced Year Badge */}
              <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
                <div className="group relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-lg"></div>
                  
                  <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 px-6 py-4 md:px-8 md:py-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-500">
                    <div className="text-3xl md:text-4xl mb-2 md:mb-3 animate-float">{memory.emoji}</div>
                    <div className="text-2xl md:text-3xl font-light text-gray-800 mb-1 md:mb-2">
                      {memory.year}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 font-light">
                      {memory.title}
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-white border-2 md:border-3 border-purple-400 rounded-full shadow-xl z-10 animate-pulse-glow">
                <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-75"></div>
              </div>

              {/* Enhanced Memory Card */}
              <div className="w-full md:w-1/2">
                <div
                  className={`bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 ${
                    index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'
                  }`}
                >
                  <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed text-center mb-4 md:mb-6">
                    {memory.description}
                  </p>
                  
                  {/* Actual Photo - Fixed to show full image without cropping */}
                  <div className="w-full rounded-lg overflow-hidden border-2 border-pink-200/50 hover:border-pink-300 transition-all duration-300 relative group bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px]">
                    <img
                      src={memory.image.replace(/ /g, '%20')}
                      alt={memory.description}
                      className="w-full h-auto max-h-[200px] sm:max-h-[240px] md:max-h-[280px] lg:max-h-[320px] object-contain transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 flex items-center justify-center text-4xl">📷</div>';
                      }}
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryTimeline;
