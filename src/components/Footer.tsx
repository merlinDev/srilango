import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Award, Shield, Globe } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Tour Packages', href: '#tours' },
    { name: 'Travel Guide', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#' },
  ];

  const destinations = [
    { name: 'Sigiriya', href: '#' },
    { name: 'Kandy', href: '#' },
    { name: 'Galle', href: '#' },
    { name: 'Ella', href: '#' },
    { name: 'Yala National Park', href: '#' },
    { name: 'Nuwara Eliya', href: '#' },
  ];

  const services = [
    { name: 'Custom Tours', href: '#' },
    { name: 'Hotel Booking', href: '#' },
    { name: 'Transport', href: '#' },
    { name: 'Travel Insurance', href: '#' },
    { name: 'Visa Assistance', href: '#' },
    { name: 'Group Tours', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-orange-400 mb-3 sm:mb-4">Ceylon Wonders</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Your trusted partner for unforgettable Sri Lankan adventures. We've been creating magical 
              travel experiences for over 15 years, showcasing the best of our beautiful island nation.
            </p>
            
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">123 Galle Road, Colombo 03, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">+94 11 234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">info@ceylonwonders.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm sm:text-base text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Popular Destinations</h4>
            <ul className="space-y-1 sm:space-y-2">
              {destinations.map((destination) => (
                <li key={destination.name}>
                  <a 
                    href={destination.href} 
                    className="text-sm sm:text-base text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    {destination.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Our Services</h4>
            <ul className="space-y-1 sm:space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href} 
                    className="text-sm sm:text-base text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Certifications */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* Social Media */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <span className="text-sm sm:text-base text-gray-300 font-medium">Follow Us:</span>
              <div className="flex gap-3">
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors duration-200">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors duration-200">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors duration-200">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors duration-200">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2">
                <Award size={20} className="text-yellow-400" />
                <span className="text-sm text-gray-300">Licensed Tour Operator</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={20} className="text-green-400" />
                <span className="text-sm text-gray-300">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={20} className="text-blue-400" />
                <span className="text-sm text-gray-300">IATA Member</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="bg-gradient-to-r from-orange-600 to-teal-500 rounded-xl p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4">
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-2">Stay Updated</h4>
                <p className="text-sm sm:text-base text-orange-100">Get travel tips, special offers, and Sri Lankan insights delivered to your inbox.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full lg:min-w-80 lg:w-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
                />
                <button className="bg-white text-orange-600 px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <span>© 2024 Ceylon Wonders. All rights reserved.</span>
              <span>•</span>
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-orange-400 transition-colors">Cookie Policy</a>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <span>Reg. No: TO-2024-SL</span>
              <span>•</span>
              <span>VAT: 123456789</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;