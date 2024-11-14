import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'password123') {
      setAuthenticated(true); // Set authentication to true
      navigate('/dashboard'); // Navigate to dashboard on successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
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
      <button onClick={handleLogin} style={styles.button}>Login</button>
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
    </div>
  );
};

const styles = {
  container: { textAlign: 'center', marginTop: '50px' },
  input: { margin: '10px', padding: '10px', width: '250px' },
  button: { padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' },
};

export default Login;