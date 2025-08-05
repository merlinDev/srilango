import React from 'react';
import { Star, Quote, MapPin, Calendar } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      country: 'United States',
      location: 'New York',
      rating: 5,
      date: 'March 2024',
      tour: 'Ancient Kingdoms & Sacred Sites',
      image: 'https://mwtours.com.au/wp-content/uploads/2022/06/Sigiriya-Rock-Sri-Lanka.jpg',
      review: 'Absolutely magical experience! Climbing Sigiriya Rock Fortress at sunrise was breathtaking, and the Dambulla Cave Temple was incredible. Our guide Rajesh was incredibly knowledgeable about Sri Lankan history. The ancient cities of Anuradhapura and Polonnaruwa were fascinating. This trip exceeded all our expectations!',
      highlights: ['Sigiriya Sunrise', 'Dambulla Caves', 'Expert Guide', 'Ancient Cities']
    },
    {
      id: 2,
      name: 'James Mitchell',
      country: 'United Kingdom',
      location: 'London',
      rating: 5,
      date: 'February 2024',
      tour: 'Hill Country & Scenic Train Journey',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      review: 'The Kandy to Ella train journey through the tea plantations was absolutely spectacular! Visiting the tea factories in Nuwara Eliya and exploring Ella town was amazing. The Temple of the Tooth in Kandy was deeply spiritual. Ceylon Wonders organized everything perfectly!',
      highlights: ['Kandy-Ella Train', 'Tea Plantations', 'Temple of Tooth', 'Perfect Organization']
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      country: 'Australia',
      location: 'Sydney',
      rating: 5,
      date: 'January 2024',
      tour: 'Coastal Paradise & Marine Adventures',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      review: 'Whale watching in Mirissa was incredible - we saw blue whales and dolphins! The historic Galle Fort is so well preserved, and Unawatuna beach was paradise. Bentota water sports were thrilling, and Hikkaduwa\'s coral reef snorkeling was amazing. Our driver Kumara was fantastic!',
      highlights: ['Mirissa Whales', 'Galle Fort', 'Unawatuna Beach', 'Water Sports']
    },
    {
      id: 4,
      name: 'Marco Weber',
      country: 'Germany',
      location: 'Berlin',
      rating: 4,
      date: 'December 2023',
      tour: 'Ultimate Wildlife Safari Adventure',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      review: 'Seeing wild elephants and leopards in Yala was amazing! Udawalawe had incredible elephant herds, and Wilpattu was perfect for leopard spotting. The Minneriya elephant gathering was spectacular. Sinharaja rainforest was a nature lover\'s paradise. Professional guides throughout!',
      highlights: ['Yala Leopards', 'Udawalawe Elephants', 'Minneriya Gathering', 'Sinharaja Forest']
    },
    {
      id: 5,
      name: 'Lisa Chen',
      country: 'Singapore',
      location: 'Singapore',
      rating: 5,
      date: 'November 2023',
      tour: 'Wellness & Beach Retreat',
      image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      review: 'This wellness retreat was exactly what I needed! The Ayurvedic treatments in Bentota were authentic and relaxing. Dolphin watching in Kalpitiya was magical, and the pristine beaches of Pasikuda and Kalkudah were perfect for yoga sessions. I left feeling completely rejuvenated!',
      highlights: ['Bentota Wellness', 'Kalpitiya Dolphins', 'Pasikuda Beach', 'Authentic Treatments']
    },
    {
      id: 6,
      name: 'David Thompson',
      country: 'Canada',
      location: 'Toronto',
      rating: 5,
      date: 'October 2023',
      tour: 'Adventure & Surfing Experience',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      review: 'What an adventure! Surfing in Arugam Bay was incredible - perfect waves and great instructors. The trek to Horton Plains World\'s End was breathtaking, and hiking in the Knuckles Mountain Range was challenging but rewarding. Nilaveli and Uppuveli beaches were perfect for relaxation after adventures!',
      highlights: ['Arugam Bay Surfing', 'Horton Plains Trek', 'Knuckles Hiking', 'East Coast Beaches']
    }
  ];

  const overallStats = {
    totalReviews: 847,
    averageRating: 4.8,
    ratingDistribution: [
      { stars: 5, count: 698, percentage: 82 },
      { stars: 4, count: 127, percentage: 15 },
      { stars: 3, count: 17, percentage: 2 },
      { stars: 2, count: 3, percentage: 1 },
      { stars: 1, count: 2, percentage: 0 }
    ]
  };

  const renderStars = (rating: number, size: number = 16) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={`${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
            Don't just take our word for it. Read authentic reviews from travelers who have experienced 
            the magic of Sri Lanka with Ceylon Wonders.
          </p>

          {/* Overall Rating Stats */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600 mb-2">{overallStats.averageRating}</div>
                <div className="flex justify-center mb-2">
                  {renderStars(5, 20)}
                </div>
                <div className="text-sm sm:text-base text-gray-600">Based on {overallStats.totalReviews} reviews</div>
              </div>
              
              <div className="space-y-3">
                {overallStats.ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-10 sm:w-12">
                      <span className="text-sm font-medium">{item.stars}</span>
                      <Star size={14} className="text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-orange-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600 w-6 sm:w-8">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">{review.name}</h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <MapPin size={14} />
                    <span>{review.location}, {review.country}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {renderStars(review.rating)}
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-2">
                  <Calendar size={14} />
                  <span>{review.date}</span>
                  <span>•</span>
                  <span className="text-orange-600 font-medium text-xs sm:text-sm">{review.tour}</span>
                </div>
              </div>

              <div className="relative mb-4">
                <Quote size={20} className="text-orange-200 absolute -top-2 -left-1" />
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed pl-6">
                  {review.review}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {review.highlights.map((highlight, index) => (
                  <span 
                    key={index}
                    className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center px-2">
          <div className="bg-gradient-to-r from-orange-600 to-teal-500 rounded-xl p-6 sm:p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Create Your Own Story?</h3>
            <p className="text-base sm:text-xl mb-4 sm:mb-6 opacity-90">
              Join thousands of satisfied travelers who have discovered the magic of Sri Lanka with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="w-full sm:w-auto bg-white text-orange-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Planning Your Trip
              </button>
              <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-2">50K+</div>
            <div className="text-sm sm:text-base text-gray-600">Happy Travelers</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">4.8/5</div>
            <div className="text-sm sm:text-base text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-sm sm:text-base text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;