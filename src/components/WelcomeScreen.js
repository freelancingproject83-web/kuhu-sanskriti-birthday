import { useState, useEffect } from 'react';

const WelcomeScreen = ({ onEnter }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);
  const [stars, setStars] = useState([]);
  const [candles, setCandles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Enhanced mouse tracking for parallax
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Create more sparkles
    const sparkleArray = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 3,
      size: 1 + Math.random() * 0.5,
    }));
    setSparkles(sparkleArray);

    // Create shining stars
    const starArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      size: 0.8 + Math.random() * 0.6,
    }));
    setStars(starArray);

    // Create candles with better positioning
    const candleArray = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: 8 + (i * 7.5),
      top: 78 + Math.random() * 12,
      delay: Math.random() * 0.6,
      flickerDelay: Math.random() * 0.4,
    }));
    setCandles(candleArray);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center relative overflow-hidden animate-gradient">
      {/* Enhanced Background Elements with Animation */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-80 h-80 bg-pink-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Enhanced Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {sparkles.map((sparkle) => (
          <span
            key={sparkle.id}
            className="absolute animate-sparkle"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: `${sparkle.duration}s`,
              fontSize: `${sparkle.size}rem`,
            }}
          >
            ✨
          </span>
        ))}
      </div>

      {/* Enhanced Shining Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute animate-star-shine"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
              fontSize: `${star.size}rem`,
            }}
          >
            ⭐
          </span>
        ))}
      </div>

      {/* Main Content with Enhanced Animations */}
      <div 
        className={`text-center z-10 relative px-4 transition-all duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
        }}
      >
        {/* Precious Moments Photo - Creative Display */}
        <div className="mb-8 relative">
          <div className="relative inline-block group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 animate-pulse-glow"></div>
            
            {/* Photo frame */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white p-2 transform group-hover:scale-105 transition-all duration-500 animate-scale-in-bounce">
              <img
                src={"/photos/precious moments.jpg".replace(/ /g, '%20')}
                alt="Precious moments"
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x400/F3F4F6/9CA3AF?text=Precious+Moments';
                }}
              />
              
              {/* Decorative corners */}
              <div className="absolute top-2 left-2 text-xl animate-sparkle">✨</div>
              <div className="absolute top-2 right-2 text-xl animate-sparkle" style={{ animationDelay: '0.3s' }}>✨</div>
              <div className="absolute bottom-2 left-2 text-xl animate-sparkle" style={{ animationDelay: '0.6s' }}>✨</div>
              <div className="absolute bottom-2 right-2 text-xl animate-sparkle" style={{ animationDelay: '0.9s' }}>✨</div>
            </div>
          </div>
        </div>

        {/* Enhanced Avatar with Multiple Effects */}
        <div className="mb-10 relative inline-block animate-scale-in-bounce">
          {/* Glow rings */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full blur-2xl opacity-50 animate-pulse-glow"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 rounded-full blur-xl opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          
          <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 rounded-full flex items-center justify-center text-7xl md:text-8xl shadow-2xl border-4 border-white/80 hover:scale-110 transition-transform duration-500 animate-float">
            <span className="relative z-10">👸</span>
            
            {/* Crown with enhanced animation */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl md:text-5xl animate-float">
              <span className="relative">
                👑
                {/* Sparkles around crown */}
                <span className="absolute -top-2 -left-2 text-lg animate-sparkle">✨</span>
                <span className="absolute -top-2 -right-2 text-lg animate-sparkle" style={{ animationDelay: '0.3s' }}>✨</span>
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Title with Beautiful Typography */}
        <div className="mb-10 space-y-4 animate-slide-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 leading-tight tracking-tight animate-fade-in">
            Happy 12th Birthday,
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 leading-tight flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-4xl md:text-5xl animate-star-shine">⭐</span>
            My Little Princess
            <span className="text-4xl md:text-5xl animate-star-shine" style={{ animationDelay: '0.5s' }}>⭐</span>
          </h2>
        </div>

        {/* Enhanced Enter Button - Above Candles */}
        <button
          onClick={onEnter}
          className="group relative mt-10 mb-20 md:mb-24 px-12 py-5 md:px-16 md:py-6 bg-white/90 backdrop-blur-sm border-2 border-gray-200 text-gray-700 text-lg md:text-xl font-light rounded-full shadow-lg hover:shadow-2xl hover:border-pink-400 hover:text-pink-600 hover:bg-white transition-all duration-500 overflow-hidden animate-slide-in-up z-20"
          style={{ animationDelay: '0.4s' }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100"></div>
          
          {/* Button content */}
          <span className="relative z-10 flex items-center gap-3">
            <span className="transform group-hover:scale-110 transition-transform">Open Surprise</span>
            <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>

      {/* Enhanced Birthday Candles at Bottom - Below Enter Button */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end gap-2 md:gap-4 pb-6 md:pb-10 pointer-events-none z-10">
        {candles.map((candle) => (
          <div
            key={candle.id}
            className="relative flex flex-col items-center animate-slide-in-up"
            style={{
              animationDelay: `${candle.delay}s`,
            }}
          >
            {/* Candle Flame with enhanced flicker */}
            <div 
              className="text-2xl md:text-3xl mb-1 animate-candle-flicker"
              style={{
                animationDelay: `${candle.flickerDelay}s`,
              }}
            >
              🕯️
            </div>
            {/* Enhanced Candle with gradient */}
            <div className="w-1.5 h-10 md:h-14 bg-gradient-to-b from-pink-400 via-pink-500 to-pink-600 rounded-full shadow-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeScreen;
