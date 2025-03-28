import React, { useState } from 'react';
import './App.css';
import FindDoctorSearch from './FindDoctorSearch';
import Notification from './Notification';
import Reviews from './Reviews';
import Profile from './Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      {isLoggedIn ? <Home setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

function Login({ setIsLoggedIn }) {
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
    </div>
  );
}

function Home({ setIsLoggedIn }) {
  return (
    <div>
      <h1>Home</h1>
      <Notification />
      <FindDoctorSearch />
      <button onClick={() => alert('Instant Consultation Started')}>Instant Consultation</button>
      <Reviews />
      <Profile />
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    </div>
  );
}

export default App;