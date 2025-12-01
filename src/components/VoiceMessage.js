import { useState, useEffect, useRef } from 'react';

const VoiceMessage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const [musicNotes, setMusicNotes] = useState([]);
  const audioRef = useRef(null);

  // Your audio file
  const audioSrc = '/audio/Phoolon Ka Taron Ka Male Hare Rama Hare Krishna 128 Kbps.mp3';

  useEffect(() => {
    // Create sparkles
    const sparkleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setSparkles(sparkleArray);

    // Create music notes
    const noteArray = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      emoji: ['🎵', '🎶', '🎼'][Math.floor(Math.random() * 3)],
    }));
    setMusicNotes(noteArray);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', () => setIsPlaying(false));
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', () => setIsPlaying(false));
      }
    };
  }, []);

  const handlePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((error) => {
        console.log('Audio playback error:', error);
        alert('Audio file not found. Please add your audio file to /public/audio/birthday-message.mp3');
      });
      setIsPlaying(true);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50 py-20 md:py-28 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
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

      {/* Music Notes */}
      {isPlaying && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {musicNotes.map((note) => (
            <span
              key={note.id}
              className="absolute text-2xl animate-float opacity-40"
              style={{
                left: `${note.left}%`,
                top: `${note.top}%`,
                animationDelay: `${note.delay}s`,
              }}
            >
              {note.emoji}
            </span>
          ))}
        </div>
      )}

      <div className="max-w-2xl mx-auto w-full text-center relative z-10">
        {/* Enhanced Section Header */}
        <div className="mb-16 animate-slide-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl md:text-6xl animate-float">🎤</span>
            <span className="text-5xl md:text-6xl animate-float" style={{ animationDelay: '0.2s' }}>🎵</span>
            <span className="text-5xl md:text-6xl animate-float" style={{ animationDelay: '0.4s' }}>🎧</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-4 tracking-wide">
            Birthday Wish
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-300 via-pink-300 to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="relative animate-scale-in-bounce">
          {/* Enhanced Main Card */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-purple-50/30 to-pink-50/30 opacity-50"></div>

            {/* Enhanced Icon Display */}
            <div className="mb-12 relative z-10">
              <div className="relative inline-block">
                {/* Pulsing rings when playing */}
                {isPlaying && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse-glow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full blur-xl opacity-40 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  </>
                )}
                
                <div className={`relative w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center transition-all duration-500 border-4 border-white shadow-xl ${
                  isPlaying ? 'scale-110 animate-pulse-glow' : 'hover:scale-105'
                }`}>
                  <span className={`text-6xl md:text-7xl ${isPlaying ? 'animate-float' : ''}`}>
                    {isPlaying ? '🎧' : '🎤'}
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced Message Text */}
            <p className="text-lg md:text-xl text-gray-600 mb-12 font-light relative z-10">
              Tap to hear my birthday wish 💖
            </p>

            {/* Enhanced Play Button */}
            <button
              onClick={handlePlay}
              className={`relative w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full bg-gradient-to-r ${
                isPlaying
                  ? 'from-purple-500 via-pink-500 to-indigo-500'
                  : 'from-pink-400 via-purple-500 to-indigo-500'
              } text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 flex items-center justify-center mb-10 relative z-10 ${
                isPlaying ? 'animate-pulse-glow' : ''
              }`}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-full animate-shimmer opacity-0 hover:opacity-100"></div>
              
              {isPlaying ? (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-10 h-10 md:w-12 md:h-12 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>

            {/* Enhanced Audio Info */}
            <div className="pt-8 border-t border-gray-100 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full">
                <span className="text-2xl animate-float">🎵</span>
                <p className="text-sm text-gray-600 font-light">
                  Background music playing
                </p>
              </div>
            </div>

            {/* Hidden Audio Element */}
            <audio ref={audioRef} src={audioSrc} preload="metadata" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceMessage;
