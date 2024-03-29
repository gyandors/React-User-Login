import React, { useContext } from 'react';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import AuthContext from './Context/AuthContext';

export default function App() {
  const ctx = useContext(AuthContext);

  return (
    <>
      <Navbar />
      {!ctx.loggedIn ? <Login /> : <Welcome />}
    </>
  );
}
