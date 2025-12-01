import { useState, useEffect, useRef } from 'react';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen';
import PhotoGallery from './components/PhotoGallery';
import MemoryTimeline from './components/MemoryTimeline';
import BirthdayMessage from './components/BirthdayMessage';
import VoiceMessage from './components/VoiceMessage';
import GiftBox from './components/GiftBox';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [backgroundMusic, setBackgroundMusic] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [sparkles, setSparkles] = useState([]);
  const [stars, setStars] = useState([]);
  const mainContentRef = useRef(null);

  useEffect(() => {
    // Background music will be added when user provides the file
    // const audio = new Audio('/birthday-music.mp3');
    // audio.loop = true;
    // audio.volume = 0.3;
    // setBackgroundMusic(audio);
    // audio.play();

    // Create more sparkles for main content
    const sparkleArray = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 2 + Math.random() * 3,
      size: 0.8 + Math.random() * 0.4,
    }));
    setSparkles(sparkleArray);

    // Create more stars
    const starArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      size: 0.7 + Math.random() * 0.5,
    }));
    setStars(starArray);
  }, []);

  useEffect(() => {
    // Show/hide back to top button and update progress based on scroll
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = windowHeight > 0 ? window.scrollY / windowHeight : 0;
      setScrollProgress(Math.min(progress, 1));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnter = () => {
    setShowWelcome(false);
    // Start background music when entering
    if (backgroundMusic) {
      backgroundMusic.play();
    }
    // Smooth scroll to top after a brief delay
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  if (showWelcome) {
    return <WelcomeScreen onEnter={handleEnter} />;
  }

  return (
    <div className="relative" ref={mainContentRef}>
      {/* Enhanced Sparkles throughout */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
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
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
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

      {/* Main Content Sections with Fade In */}
      <div className="animate-fade-in">
        <PhotoGallery />
        <MemoryTimeline />
        <BirthdayMessage />
        <VoiceMessage />
        <GiftBox />
      </div>

      {/* Back to Top Button - Minimal */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-gray-200 text-gray-600 rounded-full shadow-sm hover:shadow-md hover:border-pink-300 hover:text-pink-500 transition-all duration-300 z-40 flex items-center justify-center ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Progress Indicator - Minimal */}
      <div 
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 origin-left z-50 transition-transform duration-150" 
        style={{
          transform: `scaleX(${scrollProgress})`,
        }}
      ></div>
    </div>
  );
}

export default App;
