import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, Send, Paperclip, Smile, Clock } from 'lucide-react';
import { db } from '../config/firebase';
import { doc, updateDoc, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';

const ChatConsultation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const consultation = location.state?.consultation;
  
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [chatEnded, setChatEnded] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const lastActivityRef = useRef(Date.now());
  const lastSaveRef = useRef(Date.now());

  // Load initial time remaining from Firebase and sync timer state
  useEffect(() => {
    if (!consultation?.id) return;

    const consultationRef = doc(db, 'consultations', consultation.id);
    
    // Get the consultation document to check for saved time
    const unsubscribe = onSnapshot(consultationRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        
        // If timeRemaining is saved, use it; otherwise use duration
        if (data.timeRemaining !== undefined) {
          setTimeRemaining(data.timeRemaining);
          console.log('Loaded saved time:', data.timeRemaining);
        } else if (timeRemaining === null) {
          // First time opening, use full duration
          const initialTime = consultation?.duration ? consultation.duration * 60 : 600;
          setTimeRemaining(initialTime);
          console.log('Using initial time:', initialTime);
        }

        // Sync chat started state from Firebase - this ensures both windows start timer together
        if (data.chatStarted) {
          if (!chatStarted) {
            console.log('Chat already started, resuming timer');
            setChatStarted(true);
          }
          // If chat is already started and not completed, resume timer
          if (data.status !== 'completed') {
            setIsPaused(false);
            console.log('Resuming timer for active chat');
          }
        }

        // Check if chat ended
        if (data.status === 'completed') {
          setChatEnded(true);
          setIsPaused(true);
        }
      }
    });

    return () => unsubscribe();
  }, [consultation?.id, consultation?.duration, chatStarted]);

  // Fetch messages in real-time
  useEffect(() => {
    if (!consultation?.id) {
      console.error('No consultation ID found');
      return;
    }

    console.log('Setting up message listener for consultation:', consultation.id);

    const q = query(
      collection(db, 'consultations', consultation.id, 'messages'),
      orderBy('timestamp', 'asc')
    );

    const unsubscribe = onSnapshot(q, 
      (querySnapshot) => {
        const messagesList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log('Fetched messages:', messagesList);
        setMessages(messagesList);
        
        // Update last activity when new message arrives
        if (messagesList.length > 0) {
          lastActivityRef.current = Date.now();
        }
      },
      (error) => {
        console.error('Error fetching messages:', error);
      }
    );

    return () => unsubscribe();
  }, [consultation?.id]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Save time remaining to Firebase periodically
  useEffect(() => {
    if (!consultation?.id || chatEnded || timeRemaining === null) return;

    const saveInterval = setInterval(() => {
      // Save every 5 seconds when timer is running
      if (!isPaused && Date.now() - lastSaveRef.current >= 5000) {
        updateDoc(doc(db, 'consultations', consultation.id), {
          timeRemaining: timeRemaining,
          lastUpdated: new Date().toISOString()
        }).then(() => {
          lastSaveRef.current = Date.now();
          console.log('Saved time remaining:', timeRemaining);
        }).catch(error => {
          console.error('Error saving time:', error);
        });
      }
    }, 5000);

    return () => clearInterval(saveInterval);
  }, [consultation?.id, timeRemaining, isPaused, chatEnded]);

  // Timer countdown
  useEffect(() => {
    if (timeRemaining === null) return; // Wait for time to be loaded

    if (timeRemaining <= 0) {
      setChatEnded(true);
      setIsPaused(true);
      
      // Mark consultation as completed when timer ends
      if (consultation?.id) {
        updateDoc(doc(db, 'consultations', consultation.id), {
          status: 'completed',
          endTime: new Date().toISOString(),
          timeRemaining: 0
        }).catch(error => {
          console.error('Error completing consultation:', error);
        });
      }
      return;
    }

    if (isPaused || chatEnded) {
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setChatEnded(true);
          setIsPaused(true);
          
          // Mark consultation as completed
          if (consultation?.id) {
            updateDoc(doc(db, 'consultations', consultation.id), {
              status: 'completed',
              endTime: new Date().toISOString(),
              timeRemaining: 0
            }).catch(error => {
              console.error('Error completing consultation:', error);
            });
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, isPaused, chatEnded, consultation?.id]);

  // Auto-pause after inactivity
  useEffect(() => {
    if (chatEnded || !chatStarted) return;

    const inactivityTimer = setInterval(() => {
      const timeSinceLastActivity = Date.now() - lastActivityRef.current;
      
      if (timeSinceLastActivity > 120000 && !isPaused) {
        setIsPaused(true);
      }
    }, 5000);

    return () => clearInterval(inactivityTimer);
  }, [chatEnded, chatStarted, isPaused]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSend = async () => {
    if (message.trim() && !chatEnded) {
      if (!chatStarted) {
        setChatStarted(true);
        setIsPaused(false); // Start timer immediately
        // Update consultation status to active and mark chat as started
        try {
          await updateDoc(doc(db, 'consultations', consultation.id), {
            status: 'active',
            chatStarted: true
          });
        } catch (error) {
          console.error('Error updating consultation:', error);
        }
      } else {
        // Resume timer when message is sent
        setIsPaused(false);
      }
      
      lastActivityRef.current = Date.now();
      
      try {
        // Add message to Firestore
        await addDoc(collection(db, 'consultations', consultation.id, 'messages'), {
          text: message,
          sender: 'doctor',
          senderName: 'Dr. ' + (consultation.doctor?.name || 'Doctor'),
          timestamp: serverTimestamp(),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        
        setMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again.');
      }
    }
  };

  const handleEndConsultation = async () => {
    if (window.confirm('Are you sure you want to end this consultation? The timer will stop and the consultation will be marked as completed.')) {
      try {
        // Save final time remaining before ending
        await updateDoc(doc(db, 'consultations', consultation.id), {
          status: 'completed',
          endTime: new Date().toISOString(),
          timeRemaining: timeRemaining
        });
        setChatEnded(true);
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } catch (error) {
        console.error('Error ending consultation:', error);
      }
    }
  };

  if (!consultation) {
    navigate('/dashboard');
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
            👤
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 truncate">{consultation.patientName}</h2>
            <p className="text-xs sm:text-sm text-gray-600">Patient Consultation</p>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            {/* Timer */}
            <div className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm flex items-center space-x-1 sm:space-x-2 ${
              chatEnded 
                ? 'bg-red-100 text-red-700' 
                : timeRemaining < 120 
                  ? 'bg-orange-100 text-orange-700' 
                  : 'bg-purple-100 text-purple-700'
            }`}>
              <span className="whitespace-nowrap">{chatEnded ? 'Ended' : formatTime(timeRemaining)}</span>
              {!chatEnded && (
                <span className="text-xs hidden sm:inline">
                  {isPaused ? '⏸️' : '▶️'}
                </span>
              )}
            </div>
            {/* End Button */}
            <button
              onClick={handleEndConsultation}
              className="px-2 sm:px-4 py-1.5 sm:py-2 bg-red-50 text-red-600 rounded-lg sm:rounded-xl hover:bg-red-100 transition-colors text-xs sm:text-sm font-medium whitespace-nowrap"
            >
              End
            </button>
          </div>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 pb-24 sm:pb-32">
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {/* Consultation Info Banner */}
          <div className={`border rounded-xl p-4 mb-4 ${
            chatEnded 
              ? 'bg-red-50 border-red-200' 
              : isPaused && chatStarted
                ? 'bg-yellow-50 border-yellow-200'
                : 'bg-purple-50 border-purple-200'
          }`}>
            <p className={`text-sm ${
              chatEnded 
                ? 'text-red-900' 
                : isPaused && chatStarted 
                  ? 'text-yellow-900' 
                  : 'text-purple-900'
            }`}>
              <span className="font-semibold">Duration:</span> {consultation.duration} minutes | 
              <span className="font-semibold"> Fee:</span> ₹{consultation.fee}
              {!chatStarted && (
                <span className="block mt-2 font-semibold text-purple-700">
                  ⏱️ Timer will start when you send your first message
                </span>
              )}
              {isPaused && chatStarted && !chatEnded && (
                <span className="block mt-2 font-semibold text-yellow-700">
                  ⏸️ Timer paused due to inactivity
                </span>
              )}
              {chatEnded && (
                <span className="block mt-2 font-semibold text-red-700">
                  ⚠️ Consultation time has ended
                </span>
              )}
            </p>
          </div>

          {messages.map((msg) => (
            <div key={msg.id}>
              <div
                className={`flex ${msg.sender === 'doctor' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-md ${
                    msg.sender === 'doctor'
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                      : 'bg-white text-gray-900 shadow-sm border border-gray-100'
                  } px-4 py-3 rounded-2xl`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <p className={`text-xs mt-1 ${
                    msg.sender === 'doctor' ? 'text-purple-100' : 'text-gray-500'
                  } text-right`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input */}
      <footer className="bg-white border-t border-gray-200 px-4 sm:px-6 py-3 sm:py-4 fixed bottom-0 left-0 right-0">
        <div className="max-w-4xl mx-auto">
          {chatEnded && (
            <div className="bg-red-50 border border-red-200 rounded-lg sm:rounded-xl p-2 sm:p-3 mb-2 sm:mb-3">
              <p className="text-red-900 font-semibold text-xs sm:text-sm text-center">
                Consultation Time Ended
              </p>
            </div>
          )}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button 
              disabled={chatEnded}
              className={`p-1.5 sm:p-2 rounded-full transition-colors ${
                chatEnded ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
              }`}
            >
              <Paperclip className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
            <button 
              disabled={chatEnded}
              className={`p-1.5 sm:p-2 rounded-full transition-colors hidden sm:block ${
                chatEnded ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
              }`}
            >
              <Smile className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={chatEnded ? "Consultation ended" : "Type your message..."}
              disabled={chatEnded}
              className={`flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-full focus:outline-none text-sm sm:text-base text-gray-900 ${
                chatEnded 
                  ? 'bg-gray-200 cursor-not-allowed' 
                  : 'bg-gray-100 focus:ring-2 focus:ring-purple-500'
              }`}
            />
            <button
              onClick={handleSend}
              disabled={chatEnded}
              className={`p-2 sm:p-3 rounded-full shadow-lg transition-colors ${
                chatEnded
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700'
              }`}
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChatConsultation;
