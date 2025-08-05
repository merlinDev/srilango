import React from 'react';
import { ChevronDown, Play, MapPin, Clock, Users } from 'lucide-react';

const Hero = () => {
  const scrollToTours = () => {
    const element = document.getElementById('tours');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: MapPin, value: '100+', label: 'Destinations' },
    { icon: Clock, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '50K+', label: 'Happy Travelers' },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2023/11/22150528/mirissa.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
          Discover the
          <span className="block text-orange-400">Pearl of the Orient</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          Experience the magical island of Sri Lanka from the ancient Sigiriya Rock Fortress to pristine 
          Mirissa beaches, lush Nuwara Eliya tea plantations, and incredible wildlife in Yala National Park. 
          Your unforgettable journey starts here.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-2">
          <button 
            onClick={scrollToTours}
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Tour Packages
          </button>
          
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-white hover:text-orange-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors group">
            <Play size={20} className="group-hover:scale-110 transition-transform" />
            Watch Our Story
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12 px-2">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <stat.icon size={28} className="sm:w-8 sm:h-8 text-orange-400 mb-2" />
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-200 text-center">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/70" />
        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute top-20 right-4 lg:right-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 lg:p-4 shadow-lg hidden md:block">
        <div className="text-xs lg:text-sm font-semibold text-gray-800">UNESCO Sites</div>
        <div className="text-xl lg:text-2xl font-bold text-orange-600">8</div>
      </div>

      <div className="absolute bottom-24 sm:bottom-32 left-4 lg:left-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 lg:p-4 shadow-lg hidden md:block">
        <div className="text-xs lg:text-sm font-semibold text-gray-800">Best Time</div>
        <div className="text-base lg:text-lg font-bold text-teal-600">Nov - Apr</div>
      </div>
    </div>
  );
};

export default Hero;