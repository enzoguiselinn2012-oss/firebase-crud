# Firebase CRUD Application

A user management application built with **React**, **Firebase**, and **Tailwind CSS**. Features Google authentication and real-time CRUD operations.

## ✨ Features

- ✅ **Google Authentication** - Secure Sign In / Sign Out
- ✅ **Full CRUD** - Create, Read, Update, Delete users in real-time
- ✅ **Data Validation** - Age verification (18+), city selection
- ✅ **Pagination** - Display 3 users per page
- ✅ **Activity Tracking** - Record who created/updated each user
- ✅ **Responsive UI** - Built with Tailwind CSS

## 🏗️ Project Structure

```
src/
├── firebase/
│   └── config.js       # Firebase setup (Auth + Realtime Database)
├── components/
│   ├── auth.jsx        # Google login/logout
│   └── table.jsx       # User table with CRUD operations
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 📚 Libraries Used

### Production
| Package | What it does |
|---------|-------------|
| **React** (19.2.4) | UI library - manages components and state |
| **React-DOM** (19.2.4) | Renders React components to the browser |
| **Firebase** (12.11.0) | Backend - Authentication (Google Sign-In) + Realtime Database (CRUD ops) |
| **Tailwind CSS** (4.0.7) | Utility CSS - styles buttons, tables, forms |
| **gi-all** (1.1.2) | Generates `.gitignore` files for projects |

### Development
| Package | What it does |
|---------|-------------|
| **Vite** (7.2.0) | Build tool - fast dev server and production builds |
| **@vitejs/plugin-react** (5.0.0) | Enables React support in Vite |
| **Tailwind CSS** (4.0.7) | CSS framework - styling utilities |
| **@tailwindcss/vite** (4.2.1) | Integrates Tailwind with Vite |
| **ESLint** (9.39.4) | Code linter - checks code quality |
| **@eslint/js** (9.39.4) | ESLint JavaScript rules |
| **eslint-plugin-react-hooks** (7.0.1) | Linting rules for React hooks |
| **eslint-plugin-react-refresh** (0.5.2) | ESLint support for React Fast Refresh |
| **@types/react** (19.2.14) | TypeScript types for React |
| **@types/react-dom** (19.2.3) | TypeScript types for React-DOM |
| **globals** (17.4.0) | Global variables configuration for ESLint |

## 🚀 Getting Started

### Prerequisites
- Node.js v16+ and npm
- Firebase project with:
  - Authentication enabled (Google provider)
  - Realtime Database created

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create `.env.local`** and add Firebase config:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_DATABASE_URL=your_database_url
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

3. **Start dev server**
   ```bash
   npm run dev
   ```

## 📝 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

## 🔐 How It Works

1. **User logs in** with Google → Firebase handles authentication
2. **User adds data** → Saved to Firebase Realtime Database
3. **Data updates in real-time** → All users see changes instantly
4. **User can edit/delete** → Only works when logged in

## 📊 Database Structure

```json
{
  "users/{userId}": {
    "name": "John",
    "age": 25,
    "city": "Baku",
    "createdAt": 1234567890,
    "createdBy": "google_uid",
    "updatedAt": 1234567890,
    "updatedBy": "google_uid"
  }
}
```
