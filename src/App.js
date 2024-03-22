import React, { useState } from 'react';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleLogout() {
    setLoggedIn(false);
  }

  return (
    <>
      <Navbar showLinks={loggedIn} onLogout={handleLogout} />
      {!loggedIn ? <Login onLogin={handleLogin} /> : <Welcome />}
    </>
  );
}
