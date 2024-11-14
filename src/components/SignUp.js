import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ setAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (password === confirmPassword) {
      alert('Signup successful');
      setAuthenticated(true); // Set authentication to true
      navigate('/dashboard'); // Navigate to dashboard after signup
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSignup} style={styles.button}>Sign Up</button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

const styles = {
  container: { textAlign: 'center', marginTop: '50px' },
  input: { margin: '10px', padding: '10px', width: '250px' },
  button: { padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' },
};

export default SignUp;