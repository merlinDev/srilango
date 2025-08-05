import React, { useState } from 'react';
import { Clock, Users, Star, X } from 'lucide-react';

const TourPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    travelDate: '',
    groupSize: '',
    specialRequests: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const categories = [
    { id: 'all', name: 'All Tours' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'wildlife', name: 'Wildlife' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'coastal', name: 'Coastal' },
  ];

  const tours = [
    {
      id: 1,
      category: 'cultural',
      title: 'Ancient Kingdoms & Sacred Sites',
      description: 'Explore the sacred cities of Anuradhapura and Polonnaruwa, climb the magnificent Sigiriya Rock Fortress, and discover the golden Dambulla Cave Temple.',
      duration: '7 Days',
      groupSize: '2-15 People',
      price: '$899',
      rating: 4.9,
      image: 'https://mwtours.com.au/wp-content/uploads/2022/06/Sigiriya-Rock-Sri-Lanka.jpg',
      highlights: ['Sigiriya Rock Fortress', 'Dambulla Cave Temple', 'Polonnaruwa Ancient City', 'Anuradhapura Sacred City', 'Mihintale'],
      includes: ['Accommodation', 'All Meals', 'Professional Guide', 'Transportation', 'Entrance Fees'],
      itinerary: [
        'Day 1: Arrival in Colombo, transfer to Sigiriya',
        'Day 2: Sigiriya Rock Fortress climb at sunrise',
        'Day 3: Dambulla Cave Temple and hot air ballooning',
        'Day 4: Polonnaruwa Ancient City exploration',
        'Day 5: Anuradhapura Sacred City tour',
        'Day 6: Mihintale pilgrimage site visit',
        'Day 7: Return to Colombo for departure'
      ]
    },
    {
      id: 2,
      category: 'adventure',
      title: 'Hill Country & Scenic Train Journey',
      description: 'Experience the famous Kandy to Ella train ride through misty mountains, visit Nuwara Eliya tea plantations, and explore the scenic towns of Ella and Haputale.',
      duration: '8 Days',
      groupSize: '2-12 People',
      price: '$849',
      rating: 4.8,
      image: 'http://miro.medium.com/v2/da:true/resize:fit:1200/0*XKho2cag3QQivD6E',
      highlights: ['Kandy to Ella Train Ride', 'Temple of the Tooth', 'Nuwara Eliya Tea Plantations', 'Ella Town', 'Haputale', 'Gregory Lake'],
      includes: ['Mountain Hotels', 'Train Tickets', 'Tea Factory Tours', 'Hiking Guides', 'All Meals'],
      itinerary: [
        'Day 1: Arrival and Temple of the Tooth in Kandy',
        'Day 2: Kandy to Nuwara Eliya, tea plantation visit',
        'Day 3: Gregory Lake and tea factory tours',
        'Day 4: Famous train journey from Nanu Oya to Ella',
        'Day 5: Ella exploration and hiking',
        'Day 6: Haputale scenic viewpoints',
        'Day 7: Badulla town visit',
        'Day 8: Return journey to Colombo'
      ]
    },
    {
      id: 3,
      category: 'coastal',
      title: 'Coastal Paradise & Marine Adventures',
      description: 'Explore pristine beaches from Mirissa to Unawatuna, discover historic Galle Fort, enjoy whale watching in Mirissa, and experience the vibrant coastal culture.',
      duration: '6 Days',
      groupSize: '2-20 People',
      price: '$649',
      rating: 4.7,
      image: 'https://pearlbaytravels.com/wp-content/uploads/2025/01/Nilwella-Feature-Image.jpg',
      highlights: ['Whale Watching in Mirissa', 'Galle Fort', 'Unawatuna Beach', 'Bentota Water Sports', 'Hikkaduwa Coral Reef'],
      includes: ['Beach Resorts', 'Whale Watching Tour', 'Water Sports', 'Cultural Tours', 'Seafood Dinners'],
      itinerary: [
        'Day 1: Arrival and Galle Fort exploration',
        'Day 2: Whale watching tour in Mirissa',
        'Day 3: Unawatuna beach relaxation',
        'Day 4: Bentota water sports and river safari',
        'Day 5: Hikkaduwa snorkeling and coral reef',
        'Day 6: Return to Colombo via coastal route'
      ]
    },
    {
      id: 4,
      category: 'wildlife',
      title: 'Ultimate Wildlife Safari Adventure',
      description: 'Encounter elephants, leopards, and exotic birds across Yala, Udawalawe, Wilpattu, and Minneriya National Parks. Experience Sri Lanka\'s incredible biodiversity.',
      duration: '6 Days',
      groupSize: '2-8 People',
      price: '$799',
      rating: 4.9,
      image: 'https://www.srilankalocaltours.com/wp-content/uploads/Sri-Lanka-Wildlife-Adventure-2-week-itinerary.jpg',
      highlights: ['Yala National Park', 'Udawalawe Elephants', 'Wilpattu Safari', 'Minneriya Gathering', 'Sinharaja Rainforest'],
      includes: ['Safari Vehicles', 'Park Permits', 'Professional Wildlife Guide', 'Lunch Boxes', 'Accommodation'],
      itinerary: [
        'Day 1: Arrival and Yala National Park evening safari',
        'Day 2: Full day Yala safari - leopard spotting',
        'Day 3: Udawalawe National Park - elephant watching',
        'Day 4: Wilpattu National Park safari',
        'Day 5: Minneriya National Park - elephant gathering',
        'Day 6: Sinharaja Rainforest nature walk'
      ]
    },
    {
      id: 5,
      category: 'adventure',
      title: 'Extreme Adventures & Beach Thrills',
      description: 'Experience thrilling adventures from surfing in Arugam Bay to exploring Horton Plains World\'s End, Knuckles Mountain Range hiking, and water sports.',
      duration: '9 Days',
      groupSize: '2-10 People',
      price: '$999',
      rating: 4.6,
      image: 'https://www.lankatourexperts.com/wp-content/uploads/2023/06/water-sports-in-sri-lanka-jpg.webp',
      highlights: ['Surfing in Arugam Bay', 'Horton Plains World\'s End', 'Knuckles Mountain Hiking', 'Nilaveli Beach', 'Uppuveli'],
      includes: ['Adventure Gear', 'Surfing Lessons', 'Mountain Guides', 'Beach Hotels', 'All Activities'],
      itinerary: [
        'Day 1: Arrival and transfer to Arugam Bay',
        'Day 2-3: Surfing lessons and beach activities',
        'Day 4-5: Horton Plains and World\'s End trek',
        'Day 6: Knuckles Mountain Range hiking',
        'Day 7: Travel to east coast - Nilaveli',
        'Day 8: Uppuveli beach and water sports',
        'Day 9: Return to Colombo'
      ]
    },
    {
      id: 6,
      category: 'wellness',
      title: 'Ayurvedic Wellness & Beach Retreat',
      description: 'Rejuvenate your mind and body with authentic Ayurvedic treatments, yoga sessions, and relaxation on pristine beaches of Bentota, Kalpitiya, and Pasikuda.',
      duration: '10 Days',
      groupSize: '1-8 People',
      price: '$1399',
      rating: 4.8,
      image: 'https://www.jetwinghotels.com/jetwingayurvedapavilions/wp-content/uploads/sites/30/2023/06/Panchakarma_category_thum.jpg',
      highlights: ['Ayurvedic Treatments', 'Yoga Sessions', 'Meditation', 'Organic Cuisine', 'Beach Relaxation'],
      includes: ['Wellness Resort', 'All Treatments', 'Organic Meals', 'Personal Consultant', 'Beach Activities'],
      itinerary: [
        'Day 1-3: Bentota wellness resort and initial treatments',
        'Day 4: Ayurvedic consultation and personalized program',
        'Day 5-6: Intensive treatments and yoga sessions',
        'Day 7: Travel to east coast',
        'Day 8-9: Pasikuda and Kalkudah beach relaxation',
        'Day 10: Final treatments and departure preparation'
      ]
    }
  ];

  const filteredTours = selectedCategory === 'all'
    ? tours 
    : tours.filter(tour => tour.category === selectedCategory);

  const openBookingModal = (tour: any) => {
    setSelectedTour(tour);
    setShowBookingModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
    setSelectedTour(null);
    setBookingSubmitted(false);
    document.body.style.overflow = 'unset';
    setBookingForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      travelDate: '',
      groupSize: '',
      specialRequests: '',
      newsletter: false
    });
  };

  const handleBookingInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setBookingForm(prev => ({ ...prev, [name]: checked }));
    } else {
      setBookingForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setBookingSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Discover Sri Lanka
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated tour packages designed to showcase the best of Sri Lanka's 
            culture, nature, and adventure opportunities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-100 shadow-md'
              } text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{tour.rating}</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {tour.category.charAt(0).toUpperCase() + tour.category.slice(1)}
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{tour.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">{tour.description}</p>
                
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="sm:w-4 sm:h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} className="sm:w-4 sm:h-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>

                <div className="mb-3 sm:mb-4">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {tour.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xl sm:text-2xl font-bold text-orange-600">{tour.price}</span>
                    <span className="text-sm text-gray-500 ml-1">per person</span>
                  </div>
                  <button
                    onClick={() => openBookingModal(tour)}
                    className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-teal-500 rounded-xl p-6 sm:p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-base sm:text-xl mb-4 sm:mb-6 opacity-90">
              We specialize in creating custom tours tailored to your interests and preferences.
            </p>
            <button className="w-full sm:w-auto bg-white text-orange-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Create Custom Tour
            </button>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedTour && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            {bookingSubmitted ? (
              <div className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Booking Request Received!</h2>
                <p className="text-base sm:text-xl text-gray-600 mb-6">
                  Thank you for your interest in our tour. We'll contact you within 24 hours to confirm your booking.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6 text-left">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-4">Booking Summary:</h3>
                  <div className="space-y-2 text-sm">
                    <div><strong>Tour:</strong> {selectedTour.title}</div>
                    <div><strong>Name:</strong> {bookingForm.firstName} {bookingForm.lastName}</div>
                    <div><strong>Email:</strong> {bookingForm.email}</div>
                    <div><strong>Travel Date:</strong> {bookingForm.travelDate}</div>
                    <div><strong>Group Size:</strong> {bookingForm.groupSize}</div>
                  </div>
                </div>
                <button
                  onClick={closeBookingModal}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0">
                <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 order-2 lg:order-1">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Tour Details</h2>
                    <button
                      onClick={closeBookingModal}
                      className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  
                  <img
                    src={selectedTour.image}
                    alt={selectedTour.title}
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg mb-4 sm:mb-6"
                  />
                  
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{selectedTour?.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">{selectedTour?.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                      <div>
                        <div className="text-xs sm:text-sm text-gray-500">Duration</div>
                        <div className="text-sm sm:text-base font-semibold">{selectedTour?.duration}</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-gray-500">Group Size</div>
                        <div className="text-sm sm:text-base font-semibold">{selectedTour?.groupSize}</div>
                      </div>
                    </div>
                    
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-3">Tour Highlights:</h4>
                      <div className="space-y-2">
                        {selectedTour?.highlights.map((highlight: string, index: number) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <div className="space-y-2">
                        {selectedTour?.includes.map((item: string, index: number) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-orange-600">{selectedTour?.price}</div>
                      <div className="text-xs sm:text-sm text-gray-600">per person</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 lg:p-8 order-1 lg:order-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Book This Tour</h2>
                  
                  <form onSubmit={handleBookingSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={bookingForm.firstName}
                          onChange={handleBookingInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={bookingForm.lastName}
                          onChange={handleBookingInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={bookingForm.email}
                          onChange={handleBookingInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={bookingForm.phone}
                          onChange={handleBookingInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Country *</label>
                      <input
                        type="text"
                        name="country"
                        value={bookingForm.country}
                        onChange={handleBookingInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors text-sm sm:text-base"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Preferred Travel Date</label>
                        <input
                          type="date"
                          name="travelDate"
                          value={bookingForm.travelDate}
                          onChange={handleBookingInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Group Size *</label>
                        <select
                          name="groupSize"
                          value={bookingForm.groupSize}
                          onChange={handleBookingInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors text-sm sm:text-base"
                        >
                          <option value="">Select group size</option>
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3-5">3-5 People</option>
                          <option value="6-10">6-10 People</option>
                          <option value="10+">10+ People</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Special Requests</label>
                      <textarea
                        name="specialRequests"
                        value={bookingForm.specialRequests}
                        onChange={handleBookingInputChange}
                        rows={3}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors resize-none text-sm sm:text-base"
                        placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                      />
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={bookingForm.newsletter}
                        onChange={handleBookingInputChange}
                        className="mt-1 w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <label className="text-xs sm:text-sm text-gray-600">
                        I would like to receive updates about new tours and special offers
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        'Submit Booking Request'
                      )}
                    </button>
                    
                    <p className="text-xs text-gray-500 text-center leading-relaxed">
                      By submitting this form, you agree to our terms and conditions. 
                      This is a booking request and not a confirmed reservation.
                    </p>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TourPackages;