import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, TrendingUp, Activity, LogOut, User, MessageCircle, Clock } from 'lucide-react';
import { db } from '../config/firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';

const Dashboard = () => {
  const navigate = useNavigate();
  const [doctorData] = useState(() => {
    const saved = localStorage.getItem('doctor_registration');
    return saved ? JSON.parse(saved) : null;
  });
  const [consultations, setConsultations] = useState([]);
  const [stats, setStats] = useState({
    todayPatients: 0,
    totalPatients: 0,
    totalRevenue: 0
  });

  // Fetch pending and active consultations for this doctor
  useEffect(() => {
    if (!doctorData) return;

    console.log('Setting up consultation listener for doctor:', doctorData.fullName);

    try {
      // Query for all consultations (to calculate stats)
      const q = query(
        collection(db, 'consultations'),
        where('doctor.name', '==', doctorData.fullName)
      );

      const unsubscribe = onSnapshot(q, 
        (querySnapshot) => {
          const allConsultations = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));

          // Filter for display (pending and active only)
          const activeConsultations = allConsultations
            .filter(consultation => 
              consultation.status === 'pending' || consultation.status === 'active'
            )
            .sort((a, b) => {
              // Sort: active first, then pending
              if (a.status === 'active' && b.status === 'pending') return -1;
              if (a.status === 'pending' && b.status === 'active') return 1;
              return new Date(b.bookingTime) - new Date(a.bookingTime);
            });
          
          setConsultations(activeConsultations);

          // Calculate statistics
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          const todayConsultations = allConsultations.filter(c => {
            const bookingDate = new Date(c.bookingTime);
            bookingDate.setHours(0, 0, 0, 0);
            return bookingDate.getTime() === today.getTime() && 
                   (c.status === 'active' || c.status === 'completed');
          });

          const completedConsultations = allConsultations.filter(c => 
            c.status === 'completed' || c.status === 'active'
          );

          const totalRevenue = allConsultations
            .filter(c => c.status === 'completed')
            .reduce((sum, c) => sum + (c.fee || 0), 0);

          setStats({
            todayPatients: todayConsultations.length,
            totalPatients: completedConsultations.length,
            totalRevenue: totalRevenue
          });

          console.log('Stats updated:', {
            todayPatients: todayConsultations.length,
            totalPatients: completedConsultations.length,
            totalRevenue: totalRevenue
          });
        },
        (error) => {
          console.error('Error fetching consultations:', error);
        }
      );

      return () => unsubscribe();
    } catch (error) {
      console.error('Error setting up consultation listener:', error);
    }
  }, [doctorData]);

  const handleStartChat = (consultation) => {
    // Navigate to chat consultation page
    navigate('/chat-consultation', { state: { consultation } });
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('doctor_logged_in');
      localStorage.removeItem('doctor_registration');
      window.location.href = '/';
    }
  };

  if (!doctorData) {
    navigate('/register');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 py-4 sm:py-6 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-1">Doctor Dashboard</h1>
              <p className="text-sm sm:text-base text-gray-600">Welcome back, {doctorData.fullName}</p>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto">
              <button
                onClick={() => navigate('/profile')}
                className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors text-sm"
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline font-medium">Profile</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors text-sm"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Today's Patients */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                <Activity className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
            <h3 className="text-center text-gray-600 text-xs sm:text-sm font-medium mb-2">Today's Patients</h3>
            <p className="text-center text-3xl sm:text-5xl font-bold text-gray-900 mb-2">
              {stats.todayPatients}
            </p>
            <p className="text-center text-xs sm:text-sm text-gray-500">Patients attended today</p>
          </div>

          {/* Total Patients */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
            <h3 className="text-center text-gray-600 text-xs sm:text-sm font-medium mb-2">Total Patients</h3>
            <p className="text-center text-3xl sm:text-5xl font-bold text-gray-900 mb-2">
              {stats.totalPatients}
            </p>
            <p className="text-center text-xs sm:text-sm text-gray-500">All time patients</p>
          </div>

          {/* Total Revenue */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
            <h3 className="text-center text-gray-600 text-xs sm:text-sm font-medium mb-2">Total Revenue</h3>
            <p className="text-center text-3xl sm:text-5xl font-bold text-gray-900 mb-2">
              ₹{stats.totalRevenue.toLocaleString()}
            </p>
            <p className="text-center text-xs sm:text-sm text-gray-500">All time earnings</p>
          </div>
        </div>

        {/* Pending Consultations */}
        <div className="mt-8 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">Active & Pending Consultations</h2>
          
          {consultations.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No Active Consultations</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                You don't have any active or pending chat consultations at the moment.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                When patients book consultations with you, they will appear here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {consultations.map((consultation) => (
                <div
                  key={consultation.id}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  {/* Status Badge */}
                  <div className="flex items-start justify-between mb-4 gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2 flex-wrap">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                          {consultation.patientName}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                          consultation.status === 'active' || consultation.chatStarted
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {consultation.status === 'active' || consultation.chatStarted ? 'Active' : 'Pending'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{consultation.duration} minutes</span>
                      </div>
                    </div>
                    <div className="bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                      ₹{consultation.fee}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1">Problem Description:</p>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
                      {consultation.description || 'No description provided'}
                    </p>
                  </div>

                  {/* Booking Time */}
                  <div className="mb-4 text-xs text-gray-500">
                    Booked: {new Date(consultation.bookingTime).toLocaleString()}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleStartChat(consultation)}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-semibold text-sm transition-all shadow-md flex items-center justify-center space-x-2 ${
                      consultation.status === 'active' || consultation.chatStarted
                        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:opacity-90'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{consultation.status === 'active' || consultation.chatStarted ? 'Continue Chat' : 'Start Chat'}</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
