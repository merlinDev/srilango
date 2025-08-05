import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    travelDates: '',
    groupSize: '',
    budget: '',
    interests: [],
    message: '',
    newsletter: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interests = [
    'Cultural Heritage', 'Wildlife Safari', 'Beach & Coastal', 'Adventure Sports',
    'Hill Country', 'Ayurveda & Wellness', 'Food & Culinary', 'Photography'
  ];

  const budgetRanges = [
    'Under $500', '$500 - $1000', '$1000 - $2000', '$2000 - $3000', 'Above $3000'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'newsletter') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        setFormData(prev => ({
          ...prev,
          interests: checked 
            ? [...prev.interests, value]
            : prev.interests.filter(interest => interest !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        travelDates: '',
        groupSize: '',
        budget: '',
        interests: [],
        message: '',
        newsletter: false
      });
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-green-50 rounded-xl p-12">
            <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-6">
              Your inquiry has been received successfully. Our travel experts will contact you within 24 hours 
              to discuss your dream Sri Lankan adventure.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto">
              <h3 className="font-semibold text-gray-900 mb-4">Confirmation Details:</h3>
              <div className="text-left space-y-2 text-sm">
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Travel Dates:</strong> {formData.travelDates}</p>
                <p><strong>Group Size:</strong> {formData.groupSize}</p>
                <p><strong>Reference ID:</strong> CLW-{Date.now().toString(36).toUpperCase()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Plan Your Sri Lankan Adventure
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
              Ready to explore the Pearl of the Orient? Fill out our inquiry form and let our travel experts 
              create a personalized itinerary just for you.
            </p>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Phone size={20} className="sm:w-6 sm:h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">Call Us</h3>
                  <p className="text-sm sm:text-base text-gray-600">+94 11 234 5678</p>
                  <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM (Sri Lanka Time)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Mail size={20} className="sm:w-6 sm:h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">Email Us</h3>
                  <p className="text-sm sm:text-base text-gray-600">info@ceylonwonders.com</p>
                  <p className="text-sm text-gray-500">We respond within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <MapPin size={20} className="sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">Visit Us</h3>
                  <p className="text-sm sm:text-base text-gray-600">123 Galle Road, Colombo 03, Sri Lanka</p>
                  <p className="text-sm text-gray-500">Licensed Tour Operator #TO-2024</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Clock size={20} className="sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">Best Time to Visit</h3>
                  <p className="text-sm sm:text-base text-gray-600">November to April (West & South Coast)</p>
                  <p className="text-sm text-gray-500">May to September (East Coast)</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-teal-50 rounded-xl p-4 sm:p-6">
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">Why Choose Ceylon Wonders?</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ 15+ years of experience in Sri Lankan tourism</li>
                <li>✓ Licensed and insured tour operator</li>
                <li>✓ 24/7 support during your trip</li>
                <li>✓ Customizable itineraries for all budgets</li>
                <li>✓ Expert local guides and drivers</li>
                <li>✓ Best price guarantee</li>
              </ul>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors text-sm sm:text-base"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors text-sm sm:text-base"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors text-sm sm:text-base"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Country *</label>
                <input
                  type="text"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors text-sm sm:text-base"
                  placeholder="Your country"
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Preferred Travel Dates</label>
                  <input
                    type="text"
                    name="travelDates"
                    value={formData.travelDates}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors text-sm sm:text-base"
                    placeholder="e.g., March 2024"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Group Size</label>
                  <select
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors text-sm sm:text-base"
                  >
                    <option value="">Select group size</option>
                    <option value="1">Solo Traveler</option>
                    <option value="2">Couple</option>
                    <option value="3-5">Small Group (3-5)</option>
                    <option value="6-10">Medium Group (6-10)</option>
                    <option value="11+">Large Group (11+)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Budget Range (per person)</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors text-sm sm:text-base"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Interests (Select all that apply)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {interests.map((interest) => (
                    <label key={interest} className="flex items-center gap-2 text-xs sm:text-sm">
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleInputChange}
                        className="rounded border-gray-300 text-orange-600 focus:ring-2 focus:ring-orange-200"
                      />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Additional Requirements</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, or specific places you'd like to visit..."
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="rounded border-gray-300 text-orange-600 focus:ring-2 focus:ring-orange-200"
                />
                <label className="text-xs sm:text-sm text-gray-600">
                  Subscribe to our newsletter for travel tips and special offers
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending Inquiry...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Inquiry
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                By submitting this form, you agree to our privacy policy and terms of service. 
                We'll only use your information to respond to your inquiry and send relevant travel updates.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;