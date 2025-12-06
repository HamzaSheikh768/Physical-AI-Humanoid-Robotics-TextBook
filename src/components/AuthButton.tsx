import React from 'react';
import { useAuth } from '../auth-personalization/context/AuthContext';
import { useHistory } from '@docusaurus/router';

const AuthButton: React.FC = () => {
  const { user, signin, logout, signup } = useAuth();
  const history = useHistory();

  const handleSignupClick = () => {
    history.push('/signup'); // Assuming a /signup route
  };

  const handleSigninClick = () => {
    history.push('/signin'); // Assuming a /signin route
  };

  return (
    <div>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <button onClick={handleSignupClick}>Sign Up</button>
          <button onClick={handleSigninClick}>Sign In</button>
        </>
      )}
    </div>
  );
};

export default AuthButton;
