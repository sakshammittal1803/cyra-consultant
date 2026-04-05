import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, User, Mail, Phone, MapPin, Award, Stethoscope, Languages, FileText, Edit2 } from 'lucide-react';

const DoctorProfile = () => {
  const navigate = useNavigate();
  const [doctorData] = useState(() => {
    const saved = localStorage.getItem('doctor_registration');
    return saved ? JSON.parse(saved) : null;
  });

  if (!doctorData) {
    navigate('/register');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 pb-12">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4 shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center space-x-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-serif font-bold text-gray-900">My Profile</h1>
            <p className="text-sm text-gray-600">View and manage your information</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6 border border-gray-100">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-5xl shadow-lg">
                👩‍⚕️
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">{doctorData.fullName}</h2>
                <p className="text-lg text-purple-600 font-semibold mb-1">{doctorData.specialization}</p>
                <p className="text-sm text-gray-600">{doctorData.qualification}</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/register')}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-colors"
            >
              <Edit2 className="w-4 h-4" />
              <span className="text-sm font-medium">Edit Profile</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
              <Mail className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-medium text-gray-900">{doctorData.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
              <Phone className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-sm font-medium text-gray-900">{doctorData.phone}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
              <MapPin className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="text-sm font-medium text-gray-900">{doctorData.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
              <Award className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-xs text-gray-500">Experience</p>
                <p className="text-sm font-medium text-gray-900">{doctorData.experience} years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Details */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6 border border-gray-100">
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 flex items-center">
            <Stethoscope className="w-6 h-6 mr-3 text-purple-500" />
            Professional Information
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-500 mb-1 block">Specialization</label>
              <p className="text-base text-gray-900 font-medium">{doctorData.specialization}</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-500 mb-1 block">Qualification</label>
              <p className="text-base text-gray-900 font-medium">{doctorData.qualification}</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-500 mb-1 block">Medical Registration Number</label>
              <p className="text-base text-gray-900 font-medium">{doctorData.registrationNumber}</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-500 mb-1 block flex items-center">
                <Languages className="w-4 h-4 mr-2 text-purple-500" />
                Languages Spoken
              </label>
              <p className="text-base text-gray-900 font-medium">{doctorData.languages}</p>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-purple-500" />
            About Me
          </h3>
          <p className="text-gray-700 leading-relaxed">{doctorData.about}</p>
        </div>
      </main>
    </div>
  );
};

export default DoctorProfile;
