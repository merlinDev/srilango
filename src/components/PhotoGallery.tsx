import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Camera } from 'lucide-react';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'heritage', name: 'UNESCO Sites' },
    { id: 'nature', name: 'Nature & Wildlife' },
    { id: 'culture', name: 'Culture & People' },
    { id: 'adventure', name: 'Adventures' },
    { id: 'cuisine', name: 'Local Cuisine' },
  ];

  const photos = [
    {
      id: 1,
      category: 'heritage',
      title: 'Sigiriya Rock Fortress',
      location: 'Central Province',
      description: 'Ancient palace ruins atop the iconic Lion Rock, a UNESCO World Heritage Site',
      image: 'https://mwtours.com.au/wp-content/uploads/2022/06/Sigiriya-Rock-Sri-Lanka.jpg',
      photographer: 'Ceylon Wonders'
    },
    {
      id: 2,
      category: 'nature',
      title: 'Nuwara Eliya Tea Plantations',
      location: 'Nuwara Eliya',
      description: 'Misty morning over emerald tea plantations in the hill country',
      image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/fe/8d/e7.jpg',
      photographer: 'Ceylon Wonders'
    },
    {
      id: 3,
      category: 'nature',
      title: 'Mirissa Beach Paradise',
      location: 'Mirissa',
      description: 'Crystal clear waters and golden sand beaches of the southern coast',
      image: 'https://digitaltravelcouple.com/wp-content/uploads/2020/01/mirissa-beach-sri-lanka-1.jpg',
      photographer: 'Ceylon Wonders'
    },
    {
      id: 4,
      category: 'nature',
      title: 'Yala National Park Safari',
      location: 'Yala National Park',
      description: 'Majestic elephants in their natural habitat',
      image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/f2/0f/25.jpg',
      photographer: 'Ceylon Wonders'
    },
    {
      id: 5,
      category: 'heritage',
      title: 'Temple of the Tooth',
      location: 'Kandy',
      description: 'Sacred Buddhist temple housing the tooth relic of Buddha',
      image: 'https://simpsonsforest.com/wp-content/uploads/2024/03/temple-sacred-tooth-relic-kandy-sri-lanka.jpg',
      photographer: 'Ceylon Wonders'
    },
    {
      id: 6,
      category: 'nature',
      title: 'Ella Scenic Beauty',
      location: 'Ella',
      description: 'Breathtaking views from the hill country town of Ella',
      image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/9732566d-6b33-4a1a-ba0c-1b73ed8848a4/The+Common+Wanderer-9888.jpg',
      photographer: 'Ceylon Wonders'
    },
    {
      id: 7,
      category: 'culture',
      title: 'Kandyan Cultural Dance',
      location: 'Kandy',
      description: 'Vibrant Kandyan dance performance showcasing rich cultural heritage',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/5c/08/b0/the-costume.jpg?w=1000&h=-1&s=1',
      photographer: 'Ceylon Wonders'
    },
    {
      id: 8,
      category: 'heritage',
      title: 'Galle Dutch Fort',
      location: 'Galle',
      description: 'Historic fortifications built by Dutch colonists in the 17th century',
      image: 'https://do6raq9h04ex.cloudfront.net/sites/8/2021/07/galle-fort-1050x700-1.jpg',
      photographer: 'Ceylon Wonders'
    },
    {
      id: 9,
      category: 'cuisine',
      title: 'Traditional Rice & Curry',
      location: 'Sri Lankan Cuisine',
      description: 'Authentic Sri Lankan rice and curry with coconut sambol',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/40/31/d1/typical-rice-and-curry.jpg?w=900&h=500&s=1',
      photographer: 'Ceylon Wonders'
    },
    {
      id: 10,
      category: 'nature',
      title: 'Arugam Bay Surfing',
      location: 'Arugam Bay',
      description: 'World-class surfing destination on the east coast',
      image: 'https://www.srilankainstyle.com/storage/app/media/Experiences/Surfs%20up%20in%20Arugam%20Bay/Surfs-up-in-Arugam-Bay-slider-1.jpg',
      photographer: 'Ceylon Wonders'
    },
    {
      id: 11,
      category: 'nature',
      title: 'Horton Plains World\'s End',
      location: 'Horton Plains',
      description: 'Dramatic cliff edge offering spectacular views',
      image: 'https://www.visitceylon.net/wp-content/uploads/2024/12/Horton-Plains-1-of-1.jpg',
      photographer: 'Ceylon Wonders'
    },
    {
      id: 12,
      category: 'heritage',
      title: 'Dambulla Cave Temple',
      location: 'Dambulla',
      description: 'Ancient Buddhist cave temple complex with stunning murals',
      image: 'https://www.travelmapsrilanka.com/destinations/destinationimages/dambulla-cave-temple.webp',
      photographer: 'Ceylon Wonders'
    },
    {
      id: 13,
      category: 'nature',
      title: 'Bentota Beach Resort',
      location: 'Bentota',
      description: 'Pristine golden beaches perfect for relaxation and water sports',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/587129613.webp?k=113434455153a5f4814d9151a40e1e706e05af7a673466e63ed999f8a4705c9c&o=',
      photographer: 'Ceylon Wonders'
    },
    {
      id: 14,
      category: 'nature',
      title: 'Hikkaduwa Coral Reef',
      location: 'Hikkaduwa',
      description: 'Vibrant coral reefs and marine life perfect for snorkeling',
      image: 'https://www.ceylonexpeditions.com/medias/destination_places/big/49/hikkaduwa-marine-national-park-sri-lanka-5-1.jpg',
      photographer: 'Ceylon Wonders'
    },
    {
      id: 15,
      category: 'nature',
      title: 'Udawalawe Elephant Gathering',
      location: 'Udawalawe National Park',
      description: 'Large herds of elephants in their natural habitat',
      image: 'https://www.lovesrilanka.org/wp-content/uploads/2020/06/Elephant-gathering-1200.jpg',
      photographer: 'Ceylon Wonders'
    },
    {
      id: 16,
      category: 'heritage',
      title: 'Polonnaruwa Ancient Ruins',
      location: 'Polonnaruwa',
      description: 'Well-preserved ruins of the ancient Polonnaruwa kingdom',
      image: 'https://nerdnomads.com/wp-content/uploads/2014/04/DSC7145.jpg',
      photographer: 'Ceylon Wonders'
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = selectedImage > 0 ? selectedImage - 1 : filteredPhotos.length - 1;
    } else {
      newIndex = selectedImage < filteredPhotos.length - 1 ? selectedImage + 1 : 0;
    }
    setSelectedImage(newIndex);
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Gallery of Wonders
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in the breathtaking beauty of Sri Lanka through our curated collection 
            of authentic photographs showcasing the island's diverse landscapes, rich culture, and incredible wildlife.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-orange-100 shadow-md'
              } text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16">
          {filteredPhotos.map((photo, index) => (
            <div 
              key={photo.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img 
                src={photo.image} 
                alt={photo.title}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                  <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1">{photo.title}</h3>
                  <div className="flex items-center gap-1 text-xs sm:text-sm opacity-90">
                    <MapPin size={14} />
                    <span>{photo.location}</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera size={16} className="text-gray-700" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4">
            <div className="relative max-w-5xl w-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={() => navigateImage('next')}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image */}
              <img 
                src={filteredPhotos[selectedImage].image} 
                alt={filteredPhotos[selectedImage].title}
                className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 sm:p-6 rounded-b-lg">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">{filteredPhotos[selectedImage].title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} />
                  <span className="text-sm sm:text-base lg:text-lg">{filteredPhotos[selectedImage].location}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-200 mb-2 hidden sm:block">{filteredPhotos[selectedImage].description}</p>
                <p className="text-sm text-gray-300">© {filteredPhotos[selectedImage].photographer}</p>
              </div>

              {/* Image Counter */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/20 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                {selectedImage + 1} / {filteredPhotos.length}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center px-2">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl p-6 sm:p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Want to Capture These Moments Yourself?</h3>
            <p className="text-base sm:text-xl mb-4 sm:mb-6 opacity-90">
              Join our photography tours and capture the beauty of Sri Lanka with professional guidance.
            </p>
            <button className="w-full sm:w-auto bg-white text-teal-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Photography Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;