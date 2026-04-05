import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, GraduationCap, Stethoscope, Phone, Mail, MapPin, Award, Languages, Clock } from 'lucide-react';
import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const DoctorOnboarding = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialization: '',
    qualification: '',
    experience: '',
    registrationNumber: '',
    languages: '',
    location: '',
    about: ''
  });

  const specializations = [
    'Gynecologist',
    'Obstetrician',
    'Endocrinologist',
    'Fertility Specialist',
    'Maternal-Fetal Medicine',
    'Reproductive Endocrinologist',
    'General Physician',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Prepare doctor data
      const doctorData = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        specialty: formData.specialization,
        qualification: formData.qualification,
        experience: `${formData.experience} years`,
        registrationNumber: formData.registrationNumber,
        languages: formData.languages.split(',').map(lang => lang.trim()),
        location: formData.location,
        about: formData.about,
        rating: 5.0, // Default rating for new doctors
        reviews: 0,
        image: '👩‍⚕️',
        availability: 'Available Today',
        consultationFee: 500,
        createdAt: serverTimestamp(),
        status: 'active'
      };

      // Save to Firestore
      const docRef = await addDoc(collection(db, 'doctors'), doctorData);
      console.log('Doctor registered with ID:', docRef.id);
      
      // Save to localStorage for demo
      localStorage.setItem('doctor_registration', JSON.stringify(formData));
      
      // Navigate to success page
      navigate('/success');
    } catch (error) {
      console.error('Error registering doctor:', error);
      alert('Failed to register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-6 sm:py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-3xl sm:text-4xl">
            👩‍⚕️
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2 sm:mb-3">
            Join Cyra as a Doctor
          </h1>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Help women manage their health journey with expert care
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">Registration Form</h2>
          
          <div className="space-y-4 sm:space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <User className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-500" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Dr. John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="doctor@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="Mumbai, India"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-500" />
                Professional Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specialization <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                  >
                    <option value="">Select Specialization</option>
                    {specializations.map((spec) => (
                      <option key={spec} value={spec}>{spec}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qualification <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                    placeholder="MBBS, MD (Gynecology)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    placeholder="10"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medical Registration Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleChange}
                    required
                    placeholder="MCI-12345"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Languages Spoken <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="languages"
                    value={formData.languages}
                    onChange={handleChange}
                    required
                    placeholder="English, Hindi, Marathi"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base text-gray-900"
                  />
                </div>
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-500" />
                About You
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brief Introduction <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us about your expertise, areas of interest, and approach to patient care..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-sm sm:text-base text-gray-900"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-purple-50 rounded-xl border border-purple-200">
            <label className="flex items-start space-x-2 sm:space-x-3 cursor-pointer">
              <input
                type="checkbox"
                required
                className="mt-0.5 sm:mt-1 w-4 h-4 sm:w-5 sm:h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 flex-shrink-0"
              />
              <span className="text-xs sm:text-sm text-gray-700">
                I agree to the terms and conditions and confirm that all information provided is accurate. 
                I understand that my credentials will be verified before approval.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 sm:mt-8 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs sm:text-sm text-gray-600 mt-4 sm:mt-6">
          Already registered?{' '}
          <button
            onClick={() => navigate('/')}
            className="text-purple-600 font-semibold hover:text-purple-700"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default DoctorOnboarding;
