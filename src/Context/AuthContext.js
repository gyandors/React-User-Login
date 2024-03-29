import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  loggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('loggedIn') === '1') {
      setLoggedIn(true);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem('loggedIn');

    setLoggedIn(false);
  }

  function handleLogin() {
    localStorage.setItem('loggedIn', '1');

    setLoggedIn(true);
  }
  return (
    <AuthContext.Provider
      value={{
        loggedIn: loggedIn,
        onLogout: handleLogout,
        onLogin: handleLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
