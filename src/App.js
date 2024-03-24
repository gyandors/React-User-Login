import React, { useState, useEffect } from 'react';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // //This will cause infinite render
  // if (localStorage.getItem('loggedIn') === '1') {
  //   setLoggedIn(true);
  // }

  //The abouve issue can be solved using useEffect hook.
  useEffect(() => {
    if (localStorage.getItem('loggedIn') === '1') {
      setLoggedIn(true);
    }
  }, []);

  function handleLogin(username, password) {
    localStorage.setItem('loggedIn', '1');
    setLoggedIn(true);
  }

  function handleLogout() {
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);
  }

  return (
    <>
      <Navbar showLinks={loggedIn} onLogout={handleLogout} />
      {!loggedIn ? <Login onLogin={handleLogin} /> : <Welcome />}
    </>
  );
}
