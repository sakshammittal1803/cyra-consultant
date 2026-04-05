import { useNavigate } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
          Registration Successful!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for registering with Cyra. Your application has been submitted successfully.
        </p>

        {/* Info Box */}
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-8 text-left">
          <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>Our team will verify your credentials within 24-48 hours</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>You'll receive an email confirmation once approved</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>After approval, you can start consulting with patients</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => navigate('/dashboard')}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 rounded-2xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Go to Dashboard</span>
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="w-full bg-white border-2 border-gray-300 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all"
          >
            Back to Home
          </button>
          
          <p className="text-sm text-gray-600 pt-2">
            Questions? Contact us at{' '}
            <a href="mailto:support@cyra.com" className="text-purple-600 font-semibold hover:text-purple-700">
              support@cyra.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
