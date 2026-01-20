import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { LanguageProvider } from '@/context/LanguageContext.jsx';
import { AuthProvider } from '@/contexts/SupabaseAuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <LanguageProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </LanguageProvider>
  </>
);