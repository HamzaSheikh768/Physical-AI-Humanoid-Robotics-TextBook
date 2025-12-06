import React, { useState } from 'react';
import { useAuth } from '../auth-personalization/context/AuthContext'; // Assuming this path
import { useHistory } from '@docusaurus/router';

const SigninForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signin, loading } = useAuth();
  const history = useHistory();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signin(email, password);
      history.push('/dashboard'); // Navigate to dashboard or homepage on success
    } catch (err) {
      setError(err.message || 'Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signin-form">
      <h2>Sign In</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Signing In...' : 'Sign In'}
      </button>
    </form>
  );
};

export default SigninForm;
