import React, { useState } from 'react';
import Card from './UI/Card';
import './Login.css';

export default function Login(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [usernameIsValid, setUsernameIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [valid, setValid] = useState();

  function handleUsernameChange(event) {
    setEnteredUsername(event.target.value);
    setValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  }

  function handlePasswordChange(event) {
    setEnteredPassword(event.target.value);
    setValid(
      event.target.value.trim().length > 6 && enteredUsername.includes('@')
    );
  }

  function handleUsernameBlur() {
    setUsernameIsValid(enteredUsername.includes('@'));
  }

  function handlePasswordBlur() {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onLogin();
  }

  return (
    <Card className="login-form">
      <form onSubmit={handleSubmit}>
        <div
          className={`input-control ${
            usernameIsValid === false ? 'invalid' : ''
          }`}
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="example@email.com"
            value={enteredUsername}
            onChange={handleUsernameChange}
            onBlur={handleUsernameBlur}
          />
        </div>
        <div
          className={`input-control ${
            passwordIsValid === false ? 'invalid' : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="******"
            value={enteredPassword}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
          />
        </div>
        <button className="login-btn" type="submit" disabled={!valid}>
          Login
        </button>
      </form>
    </Card>
  );
}
