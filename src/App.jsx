import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DoctorOnboarding from './pages/DoctorOnboarding';
import Success from './pages/Success';
import Dashboard from './pages/Dashboard';
import DoctorProfile from './pages/DoctorProfile';
import ChatConsultation from './pages/ChatConsultation';

function App() {
  // Check login status directly from localStorage
  const isLoggedIn = localStorage.getItem('doctor_logged_in') === 'true';

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login />} />
        <Route path="/register" element={<DoctorOnboarding />} />
        <Route path="/success" element={<Success />} />
        <Route 
          path="/dashboard" 
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/" replace />} 
        />
        <Route 
          path="/profile" 
          element={isLoggedIn ? <DoctorProfile /> : <Navigate to="/" replace />} 
        />
        <Route 
          path="/chat-consultation" 
          element={isLoggedIn ? <ChatConsultation /> : <Navigate to="/" replace />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
