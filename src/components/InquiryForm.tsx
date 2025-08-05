import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

type InquiryFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  travelDates: string;
  groupSize: string;
  budget: string;
  interests: string[];
  message: string;
  newsletter: boolean;
};

const InquiryForm = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
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
    newsletter: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interestOptions = [
    'Cultural Heritage', 'Wildlife Safari', 'Beach & Coastal', 'Adventure Sports',
    'Hill Country', 'Ayurveda & Wellness', 'Food & Culinary', 'Photography',
  ];

  const budgetRanges = [
    'Under $500', '$500 - $1000', '$1000 - $2000', '$2000 - $3000', 'Above $3000',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'newsletter') {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      } else {
        setFormData((prev) => ({
          ...prev,
          interests: checked
            ? [...prev.interests, value]
            : prev.interests.filter((i) => i !== value),
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);

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
        newsletter: false,
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
              Your inquiry has been received successfully. Our travel experts will contact you within 24 hours.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto text-left text-sm space-y-2">
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Travel Dates:</strong> {formData.travelDates}</p>
              <p><strong>Group Size:</strong> {formData.groupSize}</p>
              <p><strong>Reference ID:</strong> CLW-{Date.now().toString(36).toUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Plan Your Sri Lankan Adventure</h2>
          <p className="text-lg text-gray-600 mb-8">
            Fill out our inquiry form and let our travel experts create a personalized itinerary just for you.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex gap-4 items-start">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Phone size={20} className="text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-gray-600">+94 11 234 5678</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-teal-100 p-3 rounded-lg">
                <Mail size={20} className="text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email Us</h3>
                <p className="text-gray-600">info@ceylonwonders.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 p-3 rounded-lg">
                <MapPin size={20} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Visit Us</h3>
                <p className="text-gray-600">123 Galle Road, Colombo 03</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Clock size={20} className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Best Time to Visit</h3>
                <p className="text-gray-600">Nov–Apr (West & South), May–Sep (East)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-gray-50 rounded-xl p-6 lg:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="firstName" value={formData.firstName} onChange={handleInputChange} required placeholder="First Name" className="input" />
              <input name="lastName" value={formData.lastName} onChange={handleInputChange} required placeholder="Last Name" className="input" />
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Email" className="input" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" className="input" />
              <input name="country" value={formData.country} onChange={handleInputChange} required placeholder="Country" className="input" />
              <input name="travelDates" value={formData.travelDates} onChange={handleInputChange} placeholder="Preferred Travel Dates" className="input" />
              <select name="groupSize" value={formData.groupSize} onChange={handleInputChange} className="input">
                <option value="">Select Group Size</option>
                <option value="1">Solo</option>
                <option value="2">Couple</option>
                <option value="3-5">3–5</option>
                <option value="6-10">6–10</option>
                <option value="11+">11+</option>
              </select>
              <select name="budget" value={formData.budget} onChange={handleInputChange} className="input">
                <option value="">Select Budget</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Interests</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {interestOptions.map((interest) => (
                  <label key={interest} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      name="interests"
                      value={interest}
                      checked={formData.interests.includes(interest)}
                      onChange={handleInputChange}
                      className="rounded border-gray-300 text-orange-600"
                    />
                    {interest}
                  </label>
                ))}
              </div>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              placeholder="Additional Requirements"
              className="input resize-none"
            />

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
                className="rounded border-gray-300 text-orange-600"
              />
              Subscribe to our newsletter
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin h-5 w-5 border-b-2 border-white rounded-full" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} /> Send Inquiry
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
