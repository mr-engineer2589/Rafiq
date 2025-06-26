import React, { useState } from 'react';
import { LoginPage } from './LoginPage';
import { SignupPage } from './SignupPage';

interface AuthDemoProps {
  initialPage?: 'login' | 'signup';
}

export const AuthDemo: React.FC<AuthDemoProps> = ({ initialPage = 'login' }) => {
  const [currentPage, setCurrentPage] = useState<'login' | 'signup'>(initialPage);

  const handleClose = () => {
    // In a real app, this would navigate back to the main site
    window.location.reload();
  };

  const switchToSignup = () => {
    setCurrentPage('signup');
  };

  const switchToLogin = () => {
    setCurrentPage('login');
  };

  // Render Current Page
  if (currentPage === 'login') {
    return <LoginPage onClose={handleClose} onSwitchToSignup={switchToSignup} />;
  } else {
    return <SignupPage onClose={handleClose} onSwitchToLogin={switchToLogin} />;
  }
};