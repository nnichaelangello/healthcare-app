import React, { useState } from 'react';
import Signup from './Signup';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div className="App">
      {isLoggedIn ? (
        <Home setIsLoggedIn={setIsLoggedIn} />
      ) : showSignup ? (
        <Signup setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} setShowSignup={setShowSignup} />
      )}
    </div>
  );
}

function Login({ setIsLoggedIn, setShowSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if (email && password) setIsLoggedIn(true);
  };
  return (
    <div>
      <h1>Login</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => setShowSignup(true)}>Sign Up</button>
    </div>
  );
}

function Home({ setIsLoggedIn }) {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    </div>
  );
}

export default App;