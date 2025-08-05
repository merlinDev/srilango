import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import TourPackages from './components/TourPackages';
import InquiryForm from './components/InquiryForm';
import Reviews from './components/Reviews';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-orange-600">Ceylon Wonders</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('tours')} className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                  Tour Packages
                </button>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                  Gallery
                </button>
                <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                  Reviews
                </button>
                <button onClick={() => scrollToSection('contact')} className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-orange-600 px-3 py-2 text-base font-medium w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('tours')} className="block text-gray-700 hover:text-orange-600 px-3 py-2 text-base font-medium w-full text-left">
                Tour Packages
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block text-gray-700 hover:text-orange-600 px-3 py-2 text-base font-medium w-full text-left">
                Gallery
              </button>
              <button onClick={() => scrollToSection('reviews')} className="block text-gray-700 hover:text-orange-600 px-3 py-2 text-base font-medium w-full text-left">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="block bg-orange-600 text-white px-3 py-2 text-base font-medium w-full text-left rounded-lg mt-2">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="tours">
          <TourPackages />
        </section>
        
        <section id="gallery">
          <PhotoGallery />
        </section>
        
        <section id="reviews">
          <Reviews />
        </section>
        
        <section id="contact">
          <InquiryForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;