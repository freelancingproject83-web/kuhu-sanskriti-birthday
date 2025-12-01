import { useState, useEffect } from 'react';

const BirthdayMessage = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [fireworks, setFireworks] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [candles, setCandles] = useState([]);

  const fullMessage = `Dear Princess,

You are the sweetest girl I know.
Thank you for filling our home with happiness.
I am the proudest brother in the world.
Happy Birthday, Princess! 🎂💖

-Yours Mulla Bhaiya`;


  useEffect(() => {
    // Create more fireworks
    const fireworkArray = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: 5 + Math.random() * 90,
      top: 5 + Math.random() * 90,
      delay: Math.random() * 3,
      size: 1 + Math.random() * 0.5,
    }));
    setFireworks(fireworkArray);

    // Create more sparkles
    const sparkleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setSparkles(sparkleArray);

    // Create candles for cake
    const candleArray = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: 40 + (i * 2),
      top: 35,
      delay: Math.random() * 0.5,
    }));
    setCandles(candleArray);
  }, []);

  useEffect(() => {
    if (currentIndex < fullMessage.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullMessage.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);

      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, fullMessage]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50/50 via-rose-50/50 via-purple-50/50 to-indigo-50/50 py-20 md:py-28 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Fireworks in Background */}
      {isComplete && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {fireworks.map((firework) => (
            <div
              key={firework.id}
              className="absolute animate-firework"
              style={{
                left: `${firework.left}%`,
                top: `${firework.top}%`,
                animationDelay: `${firework.delay}s`,
                fontSize: `${firework.size}rem`,
              }}
            >
              <span className="text-4xl md:text-5xl">🎆</span>
            </div>
          ))}
        </div>
      )}

      {/* Enhanced Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
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

      <div className="max-w-3xl mx-auto w-full relative z-10">
        <div className="relative animate-scale-in-bounce">
          {/* Enhanced Main Card */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-gray-100 overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-purple-50/30 to-indigo-50/30 opacity-50"></div>

            {/* Enhanced Birthday Cake with Candles */}
            <div className="text-center mb-12 relative z-10">
              <div className="relative inline-block animate-float">
                <div className="text-7xl md:text-8xl mb-6 relative">
                  🎂
                  {/* Candles on cake */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex gap-1 justify-center">
                    {candles.map((candle) => (
                      <span
                        key={candle.id}
                        className="text-lg md:text-xl animate-candle-flicker"
                        style={{
                          animationDelay: `${candle.delay}s`,
                        }}
                      >
                        🕯️
                      </span>
                    ))}
                  </div>
                </div>
                {/* Sparkles around cake */}
                <div className="absolute -top-2 -left-2 text-2xl animate-sparkle">✨</div>
                <div className="absolute -top-2 -right-2 text-2xl animate-sparkle" style={{ animationDelay: '0.3s' }}>✨</div>
              </div>
            </div>

            {/* Enhanced Header */}
            <div className="text-center mb-12 relative z-10">
              <h2 className="text-3xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 mb-4 tracking-wide">
                A Special Message
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-pink-300 via-purple-300 to-transparent mx-auto rounded-full"></div>
            </div>

            {/* Enhanced Message Box */}
            <div className="bg-gradient-to-br from-pink-50/80 via-purple-50/80 to-indigo-50/80 rounded-xl p-8 md:p-12 border-2 border-pink-100/50 relative z-10 hover:border-pink-200 transition-all duration-500">
              {/* Enhanced corner decorations */}
              <div className="absolute top-4 left-4 text-3xl opacity-40 animate-star-shine">💖</div>
              <div className="absolute top-4 right-4 text-3xl opacity-40 animate-star-shine" style={{ animationDelay: '0.2s' }}>💝</div>
              <div className="absolute bottom-4 left-4 text-3xl opacity-40 animate-star-shine" style={{ animationDelay: '0.4s' }}>🎂</div>
              <div className="absolute bottom-4 right-4 text-3xl opacity-40 animate-star-shine" style={{ animationDelay: '0.6s' }}>🎉</div>

              {/* Sparkles around message */}
              <div className="absolute -top-3 -left-3 text-xl animate-sparkle">✨</div>
              <div className="absolute -top-3 -right-3 text-xl animate-sparkle" style={{ animationDelay: '0.5s' }}>✨</div>
              <div className="absolute -bottom-3 -left-3 text-xl animate-sparkle" style={{ animationDelay: '1s' }}>✨</div>
              <div className="absolute -bottom-3 -right-3 text-xl animate-sparkle" style={{ animationDelay: '1.5s' }}>✨</div>

              <pre className="text-lg md:text-xl lg:text-2xl font-light text-gray-700 whitespace-pre-wrap font-serif leading-relaxed text-center md:text-left relative z-10">
                {displayedText}
                {!isComplete && (
                  <span className="animate-pulse text-pink-500 ml-1 text-3xl">|</span>
                )}
              </pre>
            </div>

            {/* Enhanced Completion Animation */}
            {isComplete && (
              <div className="mt-12 text-center relative z-10 animate-scale-in-bounce">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-3xl animate-star-shine">⭐</span>
                  <p className="text-xl md:text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                    Love you always! 💕
                  </p>
                  <span className="text-3xl animate-star-shine" style={{ animationDelay: '0.5s' }}>⭐</span>
                </div>
                {/* Celebration emojis with enhanced animation */}
                <div className="flex items-center justify-center gap-4 text-4xl">
                  <span className="animate-float">🎉</span>
                  <span className="animate-float" style={{ animationDelay: '0.2s' }}>🎊</span>
                  <span className="animate-float" style={{ animationDelay: '0.4s' }}>🎈</span>
                  <span className="animate-float" style={{ animationDelay: '0.6s' }}>🎁</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayMessage;
