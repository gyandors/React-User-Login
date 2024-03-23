import React, { useState, useRef } from 'react';
import Card from './UI/Card';
import ErrorModal from './UI/ErrorModal';
import './Login.css';

export default function Login(props) {
  const [valid, setValid] = useState();

  const username = useRef('');
  const password = useRef('');

  function handleSubmit(event) {
    event.preventDefault();
    const usernameInput = username.current.value;
    const passwordInput = password.current.value;
    if (
      usernameInput.trim().length === 0 ||
      passwordInput.trim().length === 0
    ) {
      setValid({
        title: 'Invalid input',
        message: 'Please enter username and password',
      });
      return;
    } else if (!usernameInput.includes('@')) {
      setValid({
        title: 'Invalid username',
        message: 'Username must be Email',
      });
      return;
    } else if (passwordInput.trim().length < 6) {
      setValid({
        title: 'Invalid password',
        message: 'Length of password should be minimum 6',
      });
      return;
    } else props.onLogin();
  }

  function handleValid() {
    setValid();
  }

  return (
    <>
      {valid && (
        <ErrorModal
          title={valid.title}
          message={valid.message}
          onValid={handleValid}
        />
      )}
      <Card className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="username-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="example@email.com"
              ref={username}
            />
          </div>
          <div className="password-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="******"
              ref={password}
            />
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </Card>
    </>
  );
}
