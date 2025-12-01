import { useState, useEffect } from 'react';

const GiftBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (isOpen) {
      // Create confetti explosion
      const confettiArray = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: -10,
        delay: Math.random() * 0.5,
        color: ['#FF6B9D', '#C44569', '#FFB6C1', '#FFC0CB', '#FF69B4', '#FF1493', '#FFB6C1', '#FFC0CB'][Math.floor(Math.random() * 8)],
        rotation: Math.random() * 360,
        size: 8 + Math.random() * 12,
      }));
      setConfetti(confettiArray);

      // Create floating hearts
      const heartsArray = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        size: 1 + Math.random() * 0.5,
      }));
      setHearts(heartsArray);

      // Show content after box opens
      setTimeout(() => {
        setShowContent(true);
      }, 800);
    }
  }, [isOpen]);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-indigo-50/50 py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
      {/* Background Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-lg animate-sparkle opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          >
            ✨
          </span>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-4xl md:text-5xl animate-float inline-block">🎁</span>
            <span className="text-4xl md:text-5xl animate-float inline-block mx-2 md:mx-3" style={{ animationDelay: '0.2s' }}>✨</span>
            <span className="text-4xl md:text-5xl animate-float inline-block" style={{ animationDelay: '0.4s' }}>🎁</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 mb-3 md:mb-4 tracking-wide">
            A Special Gift For You
          </h2>
          <div className="w-24 md:w-32 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-pink-300 via-purple-300 to-transparent mx-auto rounded-full"></div>
        </div>

        {/* Gift Box Container */}
        <div className="relative flex flex-col items-center justify-center min-h-[500px]">
          {/* Confetti Explosion */}
          {isOpen && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {confetti.map((piece) => (
                <div
                  key={piece.id}
                  className="absolute rounded-full animate-confetti-fall"
                  style={{
                    left: `${piece.left}%`,
                    top: `${piece.top}%`,
                    width: `${piece.size}px`,
                    height: `${piece.size}px`,
                    backgroundColor: piece.color,
                    animationDelay: `${piece.delay}s`,
                    transform: `rotate(${piece.rotation}deg)`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Floating Hearts */}
          {isOpen && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {hearts.map((heart) => (
                <span
                  key={heart.id}
                  className="absolute text-2xl md:text-3xl animate-heart-float opacity-70"
                  style={{
                    left: `${heart.left}%`,
                    top: `${heart.top}%`,
                    animationDelay: `${heart.delay}s`,
                    fontSize: `${heart.size}rem`,
                  }}
                >
                  💕
                </span>
              ))}
            </div>
          )}

          {/* Gift Box */}
          {!isOpen ? (
            <div className="relative cursor-pointer group" onClick={handleOpen}>
              {/* Glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 animate-pulse-glow"></div>
              
              {/* Box */}
              <div className="relative transform group-hover:scale-110 transition-transform duration-500">
                {/* Box Base */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 rounded-lg shadow-2xl border-4 border-white/80">
                  {/* Ribbon Vertical */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-8 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 transform -translate-x-1/2 shadow-lg"></div>
                  
                  {/* Ribbon Horizontal */}
                  <div className="absolute top-1/2 left-0 right-0 h-8 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-300 transform -translate-y-1/2 shadow-lg"></div>
                  
                  {/* Bow */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="text-6xl md:text-7xl animate-float">🎀</div>
                  </div>
                  
                  {/* Sparkles around box */}
                  <span className="absolute -top-2 -left-2 text-2xl animate-sparkle">✨</span>
                  <span className="absolute -top-2 -right-2 text-2xl animate-sparkle" style={{ animationDelay: '0.3s' }}>✨</span>
                  <span className="absolute -bottom-2 -left-2 text-2xl animate-sparkle" style={{ animationDelay: '0.6s' }}>✨</span>
                  <span className="absolute -bottom-2 -right-2 text-2xl animate-sparkle" style={{ animationDelay: '0.9s' }}>✨</span>
                </div>
                
                {/* Click hint */}
                <div className="mt-6 text-lg md:text-xl text-gray-600 font-light animate-pulse">
                  Click to open! 🎁
                </div>
              </div>
            </div>
          ) : (
            /* Opened Box Content */
            <div className="relative w-full max-w-3xl mx-auto">
              {/* Box Lid (opened) */}
              <div className={`absolute -top-16 left-1/2 transform -translate-x-1/2 transition-all duration-1000 z-20 ${isOpen ? 'rotate-[-45deg] translate-y-0 opacity-100' : 'rotate-0 translate-y-0 opacity-0'}`}>
                <div className="w-64 h-8 md:w-80 md:h-10 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 rounded-t-lg shadow-xl border-4 border-white/80 border-b-0"></div>
              </div>

              {/* Content Container - Expanded */}
              <div className={`relative mx-auto bg-gradient-to-br from-pink-100/90 via-purple-100/90 to-indigo-100/90 backdrop-blur-sm rounded-2xl shadow-2xl border-4 border-white/80 p-8 md:p-12 transition-all duration-1000 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${isOpen ? 'mt-16' : 'mt-0'}`}>
                {/* Decorative Box Top */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-400 rounded-t-lg border-4 border-white/80 border-b-0"></div>
                
                {/* Special Message */}
                <div className="text-center space-y-4 md:space-y-6 relative z-10">
                  <div className="text-6xl md:text-7xl mb-4 animate-bounce">💝</div>
                  
                  <h3 className="text-3xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 mb-4">
                    My Dearest Sister,
                  </h3>
                  
                  <div className="space-y-3 md:space-y-4 text-base sm:text-lg md:text-xl text-gray-700 font-light leading-relaxed px-2">
                    <p className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                      You are the most precious gift in my life! 🎁
                    </p>
                    <p className="animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
                      Every moment with you is a treasure 💎
                    </p>
                    <p className="animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
                      Your smile lights up my world ☀️
                    </p>
                    <p className="animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
                      I am so proud to be your brother! 👑
                    </p>
                    <p className="animate-slide-in-up font-semibold text-pink-600 text-lg md:text-2xl mt-4" style={{ animationDelay: '1s' }}>
                      Happy 12th Birthday, My Little Princess! 🎂✨
                    </p>
                  </div>
                  
                  {/* Special Icons */}
                  <div className="flex justify-center gap-4 md:gap-6 mt-6 md:mt-8">
                    <span className="text-4xl md:text-5xl animate-float">👸</span>
                    <span className="text-4xl md:text-5xl animate-float" style={{ animationDelay: '0.2s' }}>💖</span>
                    <span className="text-4xl md:text-5xl animate-float" style={{ animationDelay: '0.4s' }}>🌟</span>
                    <span className="text-4xl md:text-5xl animate-float" style={{ animationDelay: '0.6s' }}>🎉</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GiftBox;

