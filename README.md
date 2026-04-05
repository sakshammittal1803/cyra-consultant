# Cyra Consultant

A chat-based web application for connecting users with verified women's health specialists.

## Features

- **Onboarding Flow**: Welcome screens introducing the app's features
- **Doctor Listings**: Browse verified specialists with detailed profiles
- **Doctor Profiles**: View comprehensive information about each doctor
- **Multiple Consultation Types**: Video call, voice call, and chat options
- **Real-time Chat**: Chat interface for consultations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will run on `http://localhost:5174`

### Build

```bash
npm run build
```

## Integration with Cyra Main App

The "Consult with Us" button in the main Cyra app should navigate to this Cyra Consultant app. You can integrate it by:

1. Running both apps simultaneously (Cyra on port 5173, Cyra Consultant on port 5174)
2. Updating the navigation in Cyra to open Cyra Consultant in a new tab or iframe
3. Or deploying both apps and linking them together

## Doctor Data

Doctor information is currently stored in the component. For production, this should be moved to:
- Firebase Firestore
- REST API
- Or another backend service

## Tech Stack

- React 18
- React Router DOM
- Tailwind CSS
- Lucide React (icons)
- Vite

## Future Enhancements

- Real video/voice call integration
- Payment gateway integration
- Appointment scheduling
- Medical records storage
- Prescription management
